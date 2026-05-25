const INVESTOR_RELATIONS_PASSWORD = "Welcome1234$";
const TRANSCRIPT_ACCESS_KEY = "nivaraInvestorTranscriptAccess";
const TRANSCRIPT_ACCESS_DURATION_MS = 60 * 1000;

export const isInvestorRelationsPassword = (password) =>
  password === INVESTOR_RELATIONS_PASSWORD;

const getTranscriptAccessList = () => {
  try {
    return JSON.parse(localStorage.getItem(TRANSCRIPT_ACCESS_KEY)) || {};
  } catch {
    return {};
  }
};

const saveTranscriptAccessList = (accessList) => {
  if (Object.keys(accessList).length === 0) {
    localStorage.removeItem(TRANSCRIPT_ACCESS_KEY);
    return;
  }

  localStorage.setItem(TRANSCRIPT_ACCESS_KEY, JSON.stringify(accessList));
};

const createToken = () => {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
};

export const createInvestorTranscriptAccess = (file) => {
  const now = Date.now();
  const accessList = getTranscriptAccessList();

  Object.entries(accessList).forEach(([token, access]) => {
    if (now - access.createdAt > TRANSCRIPT_ACCESS_DURATION_MS) {
      delete accessList[token];
    }
  });

  const token = createToken();
  accessList[token] = { file, createdAt: now };
  saveTranscriptAccessList(accessList);

  return token;
};

export const hasInvestorTranscriptAccess = (token, file) => {
  if (!token || !file) {
    return false;
  }

  const access = getTranscriptAccessList()[token];

  if (!access) {
    return false;
  }

  return access.file === file && Date.now() - access.createdAt <= TRANSCRIPT_ACCESS_DURATION_MS;
};
