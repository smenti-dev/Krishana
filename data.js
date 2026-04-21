const portfolioData = {
    profile: {
        name: "Amajala Krishna Chaitanya",
        title: "Assistant Professor",
        department: "Dept. of Biochemistry & Bioinformatics",
        university: "GITAM (Deemed to be University), Visakhapatnam",
        positioningStatement: "Focused on computational approaches to identify therapeutic targets in cancer using bioinformatics and molecular modeling — translating genomic data into actionable drug discovery insights.",
        shortBio: "Assistant Professor with over 17 years of experience in teaching and research, specializing in Structural Bioinformatics, Computational Cancer Genomics, and Drug Design.",
        fullBio: "Dr. Amajala Krishna Chaitanya is an Assistant Professor in the Department of Biochemistry and Bioinformatics at GITAM Institute of Science, GITAM (Deemed to be University), Visakhapatnam, India. With over 17 years of dedicated academic service, his research bridges the gap between biological sciences and computational technologies — identifying therapeutic targets in cancer through molecular docking, genomic analysis, and structural biology. He has authored 41+ publications (271 citations, 7,359 reads) in leading journals and is an active peer reviewer for the Journal of Ethnopharmacology and the Journal of Applied Biology & Biotechnology.",
        email: "chy2ak@gmail.com",
        linkedin: "https://www.linkedin.com/in/krishna-chaitanya-amajala",
        googleScholar: "https://scholar.google.com/",
        orcid: "https://orcid.org/",
        institutionUrl: "https://www.gitam.edu",
        stats: {
            publications: 41,
            reads: "7,359",
            citations: 271,
            domains: 3,
            experience: "17+"
        },
        scopusId: "55232257200",
        researcherId: "T-7091-2019",
        researchGate: "https://www.researchgate.net/profile/Amajala-Krishna-Chaitanya"
    },
    research: [
        {
            title: "Structural Bioinformatics & Drug Design",
            problem: "How can we identify and block the proteins driving disease?",
            whyMatters: "Most diseases including cancer are caused by malfunctioning proteins. By computationally modeling their 3D structures, we can discover drugs that precisely target and disable them — faster and at a fraction of the cost of traditional lab methods.",
            methods: "Homology modeling, molecular docking, virtual screening, ADMET prediction, and in silico lead optimization.",
            tools: ["AutoDock", "PyMOL", "Schrödinger Suite", "CASTp", "RAMPAGE"]
        },
        {
            title: "Computational Cancer Genomics",
            problem: "Which genes are driving tumor growth — and can we target them?",
            whyMatters: "Cancers like Hepatocellular Carcinoma and Triple Negative Breast Cancer are genomically complex. By mining large-scale gene expression datasets, I identify hub genes and biomarkers that serve as precise drug targets, enabling more effective, personalized therapies.",
            methods: "Integrative bioinformatics, DEG analysis, protein-protein interaction networks, hub gene identification, GEO dataset mining.",
            tools: ["Bioconductor", "STRING", "KEGG", "GEO", "Cytoscape"]
        },
        {
            title: "Immunoinformatics & Epitope Analysis",
            problem: "How does the immune system recognize and fight pathogens and cancer?",
            whyMatters: "Understanding the molecular basis of immune recognition is essential for designing vaccines and immunotherapies. My work on γδ T cells, MDSCs, and viral epitopes (Influenza, SARS, HIV) contributes to next-generation immunotherapy strategies.",
            methods: "Epitope modeling, comparative mutation analysis, protein interaction network analysis, structural stability studies.",
            tools: ["Python", "R", "NetMHCpan", "IEDB", "SWISS-MODEL"]
        }
    ],
    experience: [
        {
            role: "Assistant Professor",
            institution: "GITAM Institute of Science, GITAM University",
            period: "2008 – Present",
            description: "Leading UG/PG courses in Biochemistry and Bioinformatics for 17+ years. Supervising dissertations, driving research in computational cancer genomics and drug design, and serving as peer reviewer for international journals.",
            courses: [
                "Structural Bioinformatics",
                "Computational Drug Design",
                "Molecular Biology",
                "Biochemistry (UG & PG)",
                "Genomics & Proteomics",
                "Bioinformatics Tools & Databases"
            ]
        }
    ],
    publications: [
        // --- 2025 ---
        {
            title: "In Silico Identification of Potential Inhibitors Targeting NUSAP1, a Hub Gene in Hepatocellular Carcinoma",
            authors: "Kotta, D.; Gudivada, I.P.; Amajala, K.C.",
            journal: "Critical Reviews in Oncogenesis",
            year: 2025,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: "10.1615/CRITREVONCOG.2025059054"
        },
        {
            title: "Integrative Bioinformatics Analysis for Targeting Hub Genes in Hepatocellular Carcinoma Treatment",
            authors: "Gudivada, I.P.; Amajala, K.C.",
            journal: "Current Genomics",
            year: 2025,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: "10.2174/0113892029308243240709073945"
        },
        // --- 2024 ---
        {
            title: "Quercetin and taxifolin inhibits TMPRSS2 activity and its interaction with EGFR in paclitaxel-resistant breast cancer cells: An in silico and in vitro study",
            authors: "Kundrapu, D.B.; Chaitanya, A.K.; Manaswi, K.; Kumari, S.; Malla, R.",
            journal: "Chemical Biology and Drug Design",
            year: 2024,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: "10.1111/cbdd.14600"
        },
        // --- 2023 ---
        {
            title: "Gamma Delta T Cells: Role in Immunotherapy of Hepatocellular Carcinoma",
            authors: "Amajala, K.C.; Gudivada, I.P.; Malla, R.",
            journal: "Critical Reviews in Oncogenesis",
            year: 2023,
            citations: 42,
            type: "Journal Article",
            topPaper: true,
            doi: "10.1615/CritRevOncog.2023049893"
        },
        // --- 2022 ---
        {
            title: "Computational approaches to identify biomarkers, enzymes, and pathways of hepatocellular carcinoma",
            authors: "Chaitanya, A.K.; Priya, G.I.; Malla, R.R.",
            journal: "Theranostics and Precision Medicine for Management of Hepatocellular Carcinoma, Vol. 2",
            year: 2022,
            citations: 0,
            type: "Book Chapter",
            topPaper: false,
            doi: "10.1016/B978-0-323-98807-0.00018-1"
        },
        {
            title: "Current Overview on the Potency of Natural Products for Modulating Myeloid-derived Suppressor Cells Dependent Cold Tumors",
            authors: "Malla, R.; Pappu, L.; Amajala, K.C.; Kamal, M.A.",
            journal: "Current Medicinal Chemistry",
            year: 2022,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: "10.2174/0929867329666220324143215"
        },
        // --- 2021 ---
        {
            title: "Association between Circadian Clock and Tumour Microenvironment in Breast Cancer",
            authors: "Malla, R.R.; Padmaraju, V.; Amajala, K.C.; Chalikonda, G.; Nagaraju, G.P.",
            journal: "Critical Reviews in Oncogenesis",
            year: 2021,
            citations: 48,
            type: "Journal Article",
            topPaper: true,
            doi: "10.1615/CRITREVONCOG.2021040504"
        },
        {
            title: "Development of a Nervous System with Increasing Complexity in Lower Eukaryotic Animals",
            authors: "Malla, R.R.; Amajala, K.C.; Neelapu, N.R.R.; Padmaraju, V.",
            journal: "Developmental Biology in Prokaryotes and Lower Eukaryotes",
            year: 2021,
            citations: 0,
            type: "Book Chapter",
            topPaper: false,
            doi: "10.1007/978-3-030-77595-7_21"
        },
        // --- 2020 ---
        {
            title: "Mechanisms and Pathways of Metabolic Reprogramming of Colorectal Cancer",
            authors: "Chaitanya, A.K.; Kumari, S.; Malla, R.",
            journal: "Theranostics Approaches to Gastric and Colon Cancer",
            year: 2020,
            citations: 0,
            type: "Book Chapter",
            topPaper: false,
            doi: "10.1007/978-981-15-2017-4_5"
        },
        {
            title: "Insilico Identification of Candidate Hits for MTRA Response Regulator",
            authors: "Simhadri, A.N.; Amajala, A.K.C.",
            journal: "SSRN Preprint",
            year: 2020,
            citations: 0,
            type: "Conference Paper",
            topPaper: false,
            doi: "10.2139/ssrn.85109489340"
        },
        // --- 2019 ---
        {
            title: "Bioinformatics Analysis of Regulatory Elements of the CD151 Gene and In Silico Docking of CD151 with Diallyl Sulfide",
            authors: "Akella, M.; Amajala, K.C.; Malla, R.R.",
            journal: "Gene Reports",
            year: 2019,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: "10.1016/j.genrep.2019.100551"
        },
        {
            title: "Methods and Models in Exploring Pancreatic Functions",
            authors: "Malla, R.R.; Kumari, S.; Amajala, K.C.; et al.",
            journal: "Exploring Pancreatic Metabolism and Malignancy",
            year: 2019,
            citations: 0,
            type: "Book Chapter",
            topPaper: false,
            doi: "10.1007/978-981-32-9393-9_15"
        },
        // --- 2018 ---
        {
            title: "Probiotics: Supplements, Food, Pharmaceutical Industry",
            authors: "Putta, S.; Yarla, N.S.; Lakkappa, D.B.; Malla, R.R.; Chaitanya, A.K.; et al.",
            journal: "Therapeutic Probiotic and Unconventional Foods",
            year: 2018,
            citations: 48,
            type: "Book Chapter",
            topPaper: true,
            doi: "10.1016/B978-0-12-814625-5.00002-9"
        },
        {
            title: "A Novel Small Molecule Inhibitor of CD151 Inhibits Proliferation of Metastatic Triple Negative Breast Cancer Cell Lines",
            authors: "Gavara, M.M.; Zaveri, K.; Badana, A.K.; Gugalavath, S.; Amajala, K.C.; Malla, R.R.",
            journal: "Process Biochemistry",
            year: 2018,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: "10.1016/j.procbio.2017.12.004"
        },
        // --- 2017 ---
        {
            title: "Design, Synthesis and Pharmacological Studies of some New Quinoline Schiff Bases and 2,5-(disubstituted-[1,3,4])-oxadiazoles",
            authors: "Bharadwaj, S.S.; Poojary, B.; Kumar, S.M.; Nagananda, G.S.; Chaitanya, A.K.; et al.",
            journal: "New Journal of Chemistry",
            year: 2017,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: "10.1039/c6nj03913h"
        },
        // --- 2015 ---
        {
            title: "Virtual Screening and Docking Studies of Identified Potential Drug Target: Polysaccharide Deacetylase in Bacillus anthracis",
            authors: "Zaveri, K.; Amajala, K.C.; Bhaskar Reddy, I.",
            journal: "International Letters of Natural Sciences",
            year: 2015,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: "10.18052/WWW.SCIPRESS.COM/ILNS.34.70"
        },
        {
            title: "In Silico Proteome Screening to Identify Prospective Drug Targets in Bacillus anthracis",
            authors: "Amajala, K.C.; Bhaskar Reddy, I.; Zaveri, K.",
            journal: "International Journal of Pharma Sciences",
            year: 2015,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: ""
        },
        // --- 2014 ---
        {
            title: "Computational Interaction of Entomopathogenic Fungal Secondary Metabolites with Proteins Involved in Human Xenobiotic Detoxification",
            authors: "Sanivada, S.K.; Challa, M.M.; Amajala, K.C.",
            journal: "International Journal of Pharmacy and Pharmaceutical Sciences",
            year: 2014,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: ""
        },
        {
            title: "Comparative Epitope Stability Analysis of Influenza A Virus Antigenic Proteins",
            authors: "Amajala, K.C.; Meena, R.; Dowluru, K.S.",
            journal: "International Journal of Bioinformatics Research",
            year: 2014,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: ""
        },
        {
            title: "Isolation, Purification and Characterization of a Trypsin Inhibitor from C. lanatus Testa",
            authors: "Barla, S.; Dowluru, K.S.; Prabhakar, S.; Amajala, K.C.",
            journal: "Book Chapter in Plant Biochemistry",
            year: 2014,
            citations: 0,
            type: "Book Chapter",
            topPaper: false,
            doi: ""
        },
        // --- 2013 ---
        {
            title: "Homology Modeling and Structural Analysis of DNA Binding Response Regulator of Bacillus anthracis",
            authors: "Amajala, K.C.; Bhaskar Reddy, I.; Dowluru, K.S.",
            journal: "International Journal of Current Pharmaceutical Research",
            year: 2013,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: ""
        },
        {
            title: "Protein Interaction Networks in Metallo Proteins and Docking Approaches of Metallic Compounds with TIMP and MMP in Control of MAPK Pathway",
            authors: "Dowluru, K.S.; Sai, P.C.; Rao, P.V.N.; Chaitanya, A.K.; et al.",
            journal: "Letters in Drug Design and Discovery",
            year: 2013,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: ""
        },
        {
            title: "The Elements of Statistical Learning in Colon Cancer Datasets: Data Mining, Inference and Prediction",
            authors: "Kaladhar, D.S.V.G.K.; Pottumuthu, B.K.; Rao, P.V.N.; Chaitanya, A.K.; et al.",
            journal: "International Journal of Computer Applications",
            year: 2013,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: ""
        },
        // --- 2012 ---
        {
            title: "Methylation Profiling of Tumor Suppressor Genes Involved in Lung Cancer",
            authors: "Amajala, K.C.; Vishwanath, A.; Kaladhar, D.S.V.G.K.; Bhaskar Reddy, I.",
            journal: "Bioinformation",
            year: 2012,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: ""
        },
        {
            title: "Comparative Sequence and Structural Conformation Analysis of RecA Protein",
            authors: "Amajala, K.C.; Dowluru, K.S.; Suresh, S.; Bhaskar Reddy, I.",
            journal: "International Journal of Pharma and Bio Sciences",
            year: 2012,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: ""
        },
        {
            title: "Epitope Modeling, Comparative Mutation & Structural Stability Analysis of Influenza A Virus H1N1",
            authors: "Chaitanya, A.K.; Ravi Chandu, V.S.V.; Kaladhar, D.S.V.G.K.; Bhaskar Reddy, I.",
            journal: "Drug Invention Today",
            year: 2012,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: ""
        },
        {
            title: "Towards an Understanding of Signal Transduction Protein Interaction Networks",
            authors: "Kaladhar, D.S.V.G.K.; Sai, P.C.; Rao, P.V.N.; Chaitanya, A.K.; et al.",
            journal: "Bioinformation",
            year: 2012,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: "10.6026/97320630008437"
        },
        {
            title: "Methylation Profiling of Tumor Suppressor Genes Involved in Various Cancers and Structural Analysis of RASSF1 Protein",
            authors: "Amajala, K.C.; Bhaskar Reddy, I.; Dowluru, K.S.",
            journal: "Journal of Proteomics & Bioinformatics",
            year: 2012,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: ""
        },
        // --- 2011 ---
        {
            title: "A Comparative Docking Studies on Inhibitors of Anti-apoptotic Proteins",
            authors: "Krishna Chaitanya, A.; Bhaskar Reddy, I.; Kaladhar, D.S.V.G.K.",
            journal: "International Journal of Pharmacy and Technology",
            year: 2011,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: ""
        },
        {
            title: "Huntingtin Protein Modeling and Structure Alignment Studies",
            authors: "Krishna Chaitanya, A.; Bhaskar Reddy, I.; Kaladhar, D.S.V.G.K.; Santhosh, G.N.V.",
            journal: "International Journal of Pharma and Bio Sciences",
            year: 2011,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: ""
        },
        {
            title: "Comparative Genome Analysis Using Computational Approach in HIV-1 and HIV-2",
            authors: "Dowluru, K.S.; Amajala, K.C.",
            journal: "International Journal of Bioinformatics Research",
            year: 2011,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: ""
        },
        {
            title: "Computational Study of H1N1 Viral Segments Inserted Within the Regions of SARS Genome",
            authors: "Dowluru, K.S.; Amajala, K.C.",
            journal: "International Journal of Bioinformatics Research",
            year: 2011,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: ""
        },
        {
            title: "Risk Factors in Adolescent on Arteriosclerosis: An Analysis Using Data Mining and Docking Techniques",
            authors: "Dowluru, K.S.; Rama Rao, N.V.; Duddukuri, G.R.; Amajala, K.C.",
            journal: "International Journal of Pharma and Bio Sciences",
            year: 2011,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: ""
        },
        {
            title: "Predicting Molecular Interactions In Silico: HHEX-Drug Docking Approaches in Type 2 Diabetes Mellitus",
            authors: "Dowluru, K.S.; Supriya, A.M.; Duddukuri, G.R.; Amajala, K.C.",
            journal: "International Journal of Pharma and Bio Sciences",
            year: 2011,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: ""
        },
        {
            title: "Isolation, Identification and Bioremediation Studies of Experimental Water and Land Resources",
            authors: "Dowluru, K.S.; Satish, B.; Duddukuri, G.R.; Barla, S.; et al.",
            journal: "International Journal of Pharma and Bio Sciences",
            year: 2011,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: ""
        },
        // --- 2010 ---
        {
            title: "Clinical Analysis, Drug Designing and QSAR Studies on Rheumatoid Arthritis",
            authors: "Kaladhar, D.S.V.G.K.; Satyanarayana, K.V.V.V.; Krishna Chaitanya, A.; Zakir Hussain, S.A.K.",
            journal: "International Journal of Pharma and Bio Sciences",
            year: 2010,
            citations: 0,
            type: "Journal Article",
            topPaper: false,
            doi: ""
        },
        {
            title: "Molecular Modeling and Immunoinformatics Studies in Swine Influenza H1N1 Genome",
            authors: "Kaladhar, D.S.V.G.K.; Jaya Krishna, B.; Amajala, K.C.",
            journal: "International Conference on Bioinformatics",
            year: 2010,
            citations: 0,
            type: "Conference Paper",
            topPaper: false,
            doi: ""
        }
    ],
    certifications: [
    { title: "Computer Aided Drug Design", issuer: "IIT Madras | NPTEL", year: 2018 },
    { title: "Introduction to Proteomics", issuer: "IIT Bombay | NPTEL", year: 2019 },
    { title: "Interactomics: Basics and Applications", issuer: "IIT Bombay | NPTEL", year: 2022 },
    { title: "Computational Genomics", issuer: "IISER Bhopal | NPTEL", year: 2024 },
    { title: "Bioinformatics: Algorithms and Applications", issuer: "IIT Madras | NPTEL", year: 2020 },
    { title: "Data Analysis For Biologists", issuer: "IIT Guwahati | NPTEL", year: 2026 }
],
    peerReview: [
        { journal: "Journal of Ethnopharmacology", reviews: 6, years: "2023–2025" },
        { journal: "Journal of Applied Biology & Biotechnology", reviews: 10, years: "2023–2024" },
        { journal: "Uttar Pradesh Journal of Zoology", reviews: 1, years: "2022" }
    ],
    activities: [
        "Active peer reviewer for 3 international journals with 17 reviews.",
        "PhD admissions outreach, counseling, and student mentoring.",
        "Academic engagement in Structural Bioinformatics workshops.",
        "Collaborative research with institutions across India and internationally."
    ]
};
