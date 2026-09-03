const fs = require('fs');
const path = require('path');
const db = require('./config/db');

const frontendFilesDir = path.join(__dirname, '..', 'frontend', 'public', 'files');
const backendUploadsDocDir = path.join(__dirname, 'uploads', 'documents');

if (!fs.existsSync(backendUploadsDocDir)) {
    fs.mkdirSync(backendUploadsDocDir, { recursive: true });
}

// Full catalogue of existing documents
const documentList = [
    // --- POLICIES ---
    { title: "POSH Policy", category: "policies", file: "policy-posh.pdf", date: "2024-01-01" },
    { title: "Whistle Blower Policy", category: "policies", file: "policy-whistle-blower.pdf", date: "2024-01-01" },
    { title: "KYC & AML Policy", category: "policies", file: "policy-kyc-aml.pdf", date: "2024-01-01" },
    { title: "Nomination & Remuneration Policy", category: "policies", file: "policy-nomination-remuneration.pdf", date: "2024-01-01" },
    { title: "Conversion Policy", category: "policies", file: "policy-conversion.pdf", date: "2024-01-01" },
    { title: "Code of Conduct for Independent Directors", category: "policies", file: "policy-code-independent-directors.pdf", date: "2024-01-01" },
    { title: "Related Party Transaction Policy", category: "policies", file: "policy-related-party.pdf", date: "2024-01-01" },
    { title: "Equal Opportunity Policy", category: "policies", file: "policy-equal-opportunity.pdf", date: "2024-01-01" },
    { title: "Corporate Social Responsibility", category: "policies", file: "policy-csr.pdf", date: "2024-01-01" },
    { title: "Social Media Policy", category: "policies", file: "policy-social-media.pdf", date: "2024-01-01" },
    { title: "Anti Bribery and Anti Corruption Policy", category: "policies", file: "policy-anti-bribery.pdf", date: "2024-01-01" },
    { title: "Trade Relief Policy", category: "policies", file: "policy-trade-relief.pdf", date: "2024-01-01" },
    { title: "Internal Guidelines on Corporate Governance", category: "policies", file: "policy-corporate-governance.pdf", date: "2024-01-01" },
    { title: "Technical Valuation Policy", category: "policies", file: "policy-technical-valuation.pdf", date: "2024-01-01" },

    // --- INVESTOR RELATIONS: ANNUAL RETURNS ---
    { title: "Annual Return 2019–20", category: "investor_reports", file: "Annual-Return-2019-20.pdf", date: "2020-03-31" },
    { title: "Annual Return 2020–21", category: "investor_reports", file: "Annual-Return-2020-21.pdf", date: "2021-03-31" },
    { title: "Annual Return 2021–22", category: "investor_reports", file: "Annual-Return-2021-22.pdf", date: "2022-03-31" },
    { title: "Annual Return 2022–23", category: "investor_reports", file: "Annual-Return-2022-23.pdf", date: "2023-03-31" },
    { title: "Annual Return 2023–24", category: "investor_reports", file: "Annual-Return-2023-24.pdf", date: "2024-03-31" },
    { title: "Annual Return 2024–25", category: "investor_reports", file: "Annual_Return_2024-25.pdf", date: "2025-03-31" },

    // --- INVESTOR RELATIONS: NOTICES ---
    { title: "Notice of AGM 26.06.2024", category: "investor_notices", file: "Notice-of-AGM_26.06.2024.pdf", date: "2024-06-26" },
    { title: "Notice of EGM 11.09.2024", category: "investor_notices", file: "Notice-of-EGM_11.09.2024.pdf", date: "2024-09-11" },
    { title: "Notice of EGM 09.01.2025", category: "investor_notices", file: "Notice-of-EGM_09.01.2025.pdf", date: "2025-01-09" },
    { title: "Notice of 30th EGM 07.02.2025", category: "investor_notices", file: "Notice_of_30th_EGM_to_circulate_07.02.2025.pdf", date: "2025-02-07" },
    { title: "Notice of 28th EGM 13.03.2025", category: "investor_notices", file: "Notice-of-28th-EGM_13.03.2025.pdf", date: "2025-03-13" },
    { title: "Notice of 11th AGM 19.05.2025", category: "investor_notices", file: "11th-AGM-Notice_19.05.2025.pdf", date: "2025-05-19" },
    { title: "Notice of 29th EGM 23.07.2025", category: "investor_notices", file: "Signed_Notice_of_29th_EGM-1.pdf", date: "2025-07-23" },
    { title: "Notice of 30th EGM 12.12.2025", category: "investor_notices", file: "Notice_of_30th_EGM_to_circulate.pdf", date: "2025-12-12" },
    { title: "Notice of 31st EGM 23.03.2026", category: "investor_notices", file: "Notice_of_31st_EGM_Signed.pdf", date: "2026-03-23" },
    { title: "Notice of AGM 25.05.2026", category: "investor_notices", file: "Notice of AGM 25.05.2026.pdf", date: "2026-05-25", extra_info: "Welcome_1234$" },

    // --- INVESTOR RELATIONS: TRANSCRIPTS ---
    { title: "Transcript of AGM 26.06.2024", category: "investor_transcripts", file: "Transcript_10th-AGM_26.06.2024.pdf", date: "2024-06-26" },
    { title: "Transcript of EGM 11.09.2024", category: "investor_transcripts", file: "Transcript_25th-EGM_11.09.2024-1.pdf", date: "2024-09-11" },
    { title: "Transcript of EGM 09.01.2025", category: "investor_transcripts", file: "Transcript_26th-EGM_09.01.2025.pdf", date: "2025-01-09" },
    { title: "Transcript of EGM 07.02.2025", category: "investor_transcripts", file: "Transcript_27th-EGM_07.02.2025.pdf", date: "2025-02-07" },
    { title: "Transcript of EGM 13.03.2025", category: "investor_transcripts", file: "Transcript-of-EGM-13.03.2025.pdf", date: "2025-03-13" },
    { title: "Transcript of AGM 19.05.2025", category: "investor_transcripts", file: "Transcript-AGM-19.05.2025-.pdf", date: "2025-05-19" },
    { title: "Transcript of EGM 23.07.2025", category: "investor_transcripts", file: "Transcript-EGM-23.07.2025-.pdf", date: "2025-07-23" },
    { title: "Transcript of EGM 12.12.2025", category: "investor_transcripts", file: "Transcript_EGM_12.12.2025.pdf", date: "2025-12-12" },
    { title: "Transcript of EGM 23.03.2026", category: "investor_transcripts", file: "Transcript-EGM-23.03.2026.pdf", date: "2026-03-23" },
    { title: "Transcript of AGM 25.05.2026", category: "investor_transcripts", file: "Transcript of AGM 25.05.2026.pdf", date: "2026-05-25", extra_info: "Welcome_1234$" },

    // --- SARFAESI ATTACHMENTS ---
    { title: "Updated list of properties under SARFAESI Act as on 31st August 2025", category: "sarfaesi", file: "sarfaesi-aug-2025.pdf", date: "2025-08-31" },
    { title: "Updated list of properties under SARFAESI Act as on 30th September 2025", category: "sarfaesi", file: "sarfaesi-sep-2025.pdf", date: "2025-09-30" },
    { title: "Updated list of properties under SARFAESI Act as on 31st October 2025", category: "sarfaesi", file: "sarfaesi-oct-2025.pdf", date: "2025-10-31" },
    { title: "Updated list of properties under SARFAESI Act as on 30th November 2025", category: "sarfaesi", file: "sarfaesi-nov-2025.pdf", date: "2025-11-30" },
    { title: "Updated list of properties under SARFAESI Act as on 31st December 2025", category: "sarfaesi", file: "sarfaesi-dec-2025.pdf", date: "2025-12-31" },
    { title: "Updated list of properties under SARFAESI Act as on 31st January 2026", category: "sarfaesi", file: "sarfaesi-jan-2026.pdf", date: "2026-01-31" },
    { title: "Updated list of properties under SARFAESI Act as on 28th February 2026", category: "sarfaesi", file: "sarfaesi-feb-2026.pdf", date: "2026-02-28" },
    { title: "Updated list of properties under SARFAESI Act as on 31st March 2026", category: "sarfaesi", file: "sarfaesi-mar-2026.pdf", date: "2026-03-31" },
    { title: "Updated list of properties under SARFAESI Act as on 30th April 2026", category: "sarfaesi", file: "sarfaesi-apr-2026.pdf", date: "2026-04-30" },
    { title: "Updated list of properties under SARFAESI Act as on 31st May 2026", category: "sarfaesi", file: "sarfaesi-may-2026.pdf", date: "2026-05-31" },
    { title: "Updated list of properties under SARFAESI Act as on 30th June 2026", category: "sarfaesi", file: "sarfaesi-jun-2026.pdf", date: "2026-06-30" },
    { title: "Updated list of properties under SARFAESI Act as on 31st July 2026", category: "sarfaesi", file: "sarfaesi-jul-2026.pdf", date: "2026-07-31" },

    // --- PUBLIC DISCLOSURES ---
    { title: "Public Disclosure March 2021", category: "public_disclosure", file: "pd-mar-2021.pdf", date: "2021-03-31" },
    { title: "Public Disclosure June 2021", category: "public_disclosure", file: "pd-jun-2021.pdf", date: "2021-06-30" },
    { title: "Public Disclosure September 2021", category: "public_disclosure", file: "pd-sep-2021.pdf", date: "2021-09-30" },
    { title: "Public Disclosure December 2021", category: "public_disclosure", file: "pd-dec-2021.pdf", date: "2021-12-31" },
    { title: "Public Disclosure March 2022", category: "public_disclosure", file: "pd-mar-2022.pdf", date: "2022-03-31" },
    { title: "Public Disclosure June 2022", category: "public_disclosure", file: "pd-jun-2022.pdf", date: "2022-06-30" },
    { title: "Public Disclosure September 2022", category: "public_disclosure", file: "pd-sep-2022.pdf", date: "2022-09-30" },
    { title: "Public Disclosure December 2022", category: "public_disclosure", file: "pd-dec-2022.pdf", date: "2022-12-31" },
    { title: "Public Disclosure March 2023", category: "public_disclosure", file: "pd-mar-2023.pdf", date: "2023-03-31" },
    { title: "Public Disclosure June 2023", category: "public_disclosure", file: "pd-jun-2023.pdf", date: "2023-06-30" },
    { title: "Public Disclosure September 2023", category: "public_disclosure", file: "pd-sep-2023.pdf", date: "2023-09-30" },
    { title: "Public Disclosure December 2023", category: "public_disclosure", file: "pd-dec-2023.pdf", date: "2023-12-31" },
    { title: "Public Disclosure March 2024", category: "public_disclosure", file: "pd-mar-2024.pdf", date: "2024-03-31" },
    { title: "Public Disclosure June 2024", category: "public_disclosure", file: "pd-jun-2024.pdf", date: "2024-06-30" },
    { title: "Public Disclosure September 2024", category: "public_disclosure", file: "pd-sep-2024.pdf", date: "2024-09-30" },
    { title: "Public Disclosure December 2024", category: "public_disclosure", file: "pd-dec-2024.pdf", date: "2024-12-31" },
    { title: "Public Disclosure March 2025", category: "public_disclosure", file: "pd-mar-2025.pdf", date: "2025-03-31" },
    { title: "Public Disclosure June 2025", category: "public_disclosure", file: "pd-jun-2025.pdf", date: "2025-06-30" },
    { title: "Public Disclosure September 2025", category: "public_disclosure", file: "pd-sep-2025.pdf", date: "2025-09-30" },
    { title: "Public Disclosure December 2025", category: "public_disclosure", file: "pd-dec-2025.pdf", date: "2025-12-31" },
    { title: "Public Disclosure March 2026", category: "public_disclosure", file: "pd-mar-2026.pdf", date: "2026-03-31" },
    { title: "Public Disclosure June 2026", category: "public_disclosure", file: "pd-jun-2026.pdf", date: "2026-06-30" },

    // --- AUCTION PROPERTIES ---
    { title: "Sale Cum Auction Notice - Balasaheb Sudam Tupe", category: "auction", file: "sale-notice-tupe.pdf", date: "2025-01-01", extra_info: { borrower: "Balasaheb Sudam Tupe" } },
    { title: "Sale Cum Auction Notice - Md Manjunath", category: "auction", file: "sale-notice-manjunath.pdf", date: "2025-01-01", extra_info: { borrower: "Md Manjunath" } },
    { title: "Sale Cum Auction Notice - Amarnath", category: "auction", file: "sale-notice-amarnath.pdf", date: "2025-01-01", extra_info: { borrower: "Amarnath" } },
    { title: "Sale Cum Auction Notice - Mote", category: "auction", file: "sale-notice-mote.pdf", date: "2025-01-01", extra_info: { borrower: "Mote" } },

    // --- FAIR PRACTICE CODE ---
    { title: "Fair Practice Code English", category: "fair_practice_code", file: "fpc-english.pdf", date: "2024-01-01" },
    { title: "Fair Practice Code Kannada", category: "fair_practice_code", file: "fpc-kannada.pdf", date: "2024-01-01" },
    { title: "Fair Practice Code Telugu", category: "fair_practice_code", file: "fpc-telugu.pdf", date: "2024-01-01" },
    { title: "Fair Practice Code Marathi", category: "fair_practice_code", file: "fpc-marathi.pdf", date: "2024-01-01" },
    { title: "Fair Practice Code Tamil", category: "fair_practice_code", file: "fpc-tamil.pdf", date: "2024-01-01" },
    { title: "Fair Practice Code (Full Document)", category: "fair_practice_code", file: "Fair-Practice-Code.pdf", date: "2024-01-01" },

    // --- MITC (MOST IMPORTANT TERMS AND CONDITIONS) ---
    { title: "MITC English", category: "mitc", file: "mitc-english.pdf", date: "2024-01-01" },
    { title: "MITC Kannada", category: "mitc", file: "mitc-kannada.pdf", date: "2024-01-01" },
    { title: "MITC Telugu", category: "mitc", file: "mitc-telugu.pdf", date: "2024-01-01" },
    { title: "MITC Tamil", category: "mitc", file: "mitc-tamil.pdf", date: "2024-01-01" },
    { title: "MITC Marathi", category: "mitc", file: "mitc-marathi.pdf", date: "2024-01-01" },

    // --- CUSTOMER FORMS & DISCLOSURES ---
    { title: "Application Form", category: "customer_forms", file: "application-form.pdf", date: "2024-01-01" },
    { title: "E-NACH Bank Code", category: "customer_forms", file: "enach-bankcode.pdf", date: "2024-01-01" },
    { title: "Consumer Education Literature", category: "customer_forms", file: "consumer-education.pdf", date: "2024-01-01" },
    { title: "Disclosure on Interest Rate", category: "customer_forms", file: "interest-rate-disclosure.pdf", date: "2024-01-01" },
    { title: "List of Recovery Agents", category: "customer_forms", file: "recovery-agents.pdf", date: "2024-01-01" },
    { title: "Release of Property Guidelines", category: "customer_forms", file: "release-of-property.pdf", date: "2024-01-01" },
    { title: "Risk Based Pricing Grid", category: "customer_forms", file: "risk-based-pricing-grid.pdf", date: "2024-01-01" },
    { title: "Corporate Governance Guidelines", category: "customer_forms", file: "corporate-governance.pdf", date: "2024-01-01" },

    // --- CSR DISCLOSURES ---
    { title: "CSR Approved Projects 2025-26", category: "csr", file: "CSR-Approved-Projects-2025-26.pdf", date: "2025-04-01" }
];

async function seed() {
    console.log("🚀 Starting Document & PDF Seeding...");

    // 1. Fetch current documents in database
    db.query("SELECT id, title, file_name FROM documents", async (err, existingRows) => {
        if (err) {
            console.error("❌ Failed to query documents:", err);
            process.exit(1);
        }

        const existingNames = new Set(existingRows.map(r => (r.file_name || "").toLowerCase().trim()));
        const existingTitles = new Set(existingRows.map(r => (r.title || "").toLowerCase().trim()));

        let insertedCount = 0;
        let skippedCount = 0;

        for (const item of documentList) {
            const fileName = item.file;
            const srcPath = path.join(frontendFilesDir, fileName);
            const destPath = path.join(backendUploadsDocDir, fileName);

            // Copy file to uploads/documents if exists in frontend/public/files
            let fileSize = 0;
            if (fs.existsSync(srcPath)) {
                try {
                    fileSize = fs.statSync(srcPath).size;
                    if (!fs.existsSync(destPath)) {
                        fs.copyFileSync(srcPath, destPath);
                    }
                } catch (e) {
                    console.error(`Error copying ${fileName}:`, e.message);
                }
            } else if (fs.existsSync(destPath)) {
                fileSize = fs.statSync(destPath).size;
            }

            // Check if already in DB
            const isDuplicate = existingNames.has(fileName.toLowerCase().trim()) || 
                                existingTitles.has(item.title.toLowerCase().trim());

            if (isDuplicate) {
                skippedCount++;
                continue;
            }

            const relativeUrl = `/uploads/documents/${fileName}`;
            const extraInfoVal = item.extra_info ? JSON.stringify(item.extra_info) : null;
            const query = `
                INSERT INTO documents (title, category, file_url, file_name, file_size, publish_date, extra_info, is_active)
                VALUES (?, ?, ?, ?, ?, ?, ?, 1)
            `;

            await new Promise((resolve) => {
                db.query(
                    query,
                    [
                        item.title,
                        item.category,
                        relativeUrl,
                        fileName,
                        fileSize,
                        item.date,
                        extraInfoVal
                    ],
                    (insErr) => {
                        if (insErr) {
                            console.error(`❌ Error inserting ${item.title}:`, insErr.message);
                        } else {
                            insertedCount++;
                        }
                        resolve();
                    }
                );
            });
        }

        console.log(`\n🎉 Seeding Finished!`);
        console.log(`   - Inserted: ${insertedCount} new documents into database`);
        console.log(`   - Skipped: ${skippedCount} already existing documents`);

        db.query("SELECT COUNT(*) as count FROM documents", (countErr, countRows) => {
            if (!countErr && countRows && countRows[0]) {
                console.log(`   - Total documents in database: ${countRows[0].count}`);
            }
            process.exit(0);
        });
    });
}

seed();
