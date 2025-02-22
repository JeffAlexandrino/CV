const translations = {
    en: {
        headerName: "Jefferson Barzan Alexandrino",
        linksTitle: "Links",
        aboutTitle: "About Me",
        aboutText: "I am looking to enter the job market using my skills acquired during my software engineering studies to contribute with creative and efficient solutions. I am committed to learning, growing professionally, and working in a team, seeking opportunities that allow me to apply my knowledge and collaborate in the development of innovative projects.",
        personalDataTitle: "Personal Data",
        dob: "Date of Birth: October 7, 2002",
        age: "Age: 22 years",
        gender: "Gender: Male",
        address: "Address: Rua Felipe Schmidt 333, Criciúma, Santa Catarina",
        email: "Email: jeffalexandrino07@gmail.com",
        phone: "Phone: +55 48 99976-8330",
        experienceTitle: "Experience",
        job1Title: "Customer Success Intern - Services",
        job1Company: "Company: Betha Sistemas",
        job1Period: "Period: Sep 2023 - Nov 2023",
        job2Title: "Teaching Assistant - Informatics",
        job2Company: "Company: Satc",
        job2Period: "Period: Aug 2021 - Dec 2022",
        job3Title: "Research Intern",
        job3Company: "Company: UniSatc",
        job3Period: "Period: Jun 2021 - Jun 2023",
        educationTitle: "Education",
        degree1: "Bachelor's Degree - Software Engineering (ongoing)",
        school1: "Unisatc, Criciúma",
        degree2: "Japanese Language (ongoing)",
        school2: "Mundo Idiomas, Criciúma",
        degree3: "High School (Dec 2020)",
        school3: "Colégio São Bento, Criciúma",
        degree4: "English Language (Feb 2019)",
        school4: "Rockfeller, Criciúma",
        skillsTitle: "Skills",
        interestsTitle: "Interests",
        interests: ["Technology", "Digital Games", "Foreign Language Study", "Books", "History", "Anime"]
    },

    pt: {
        headerName: "Jefferson Barzan Alexandrino",
        linksTitle: "Links",
        aboutTitle: "Sobre Mim",
        aboutText: "Busco ingressar no mercado de trabalho utilizando minhas habilidades adquiridas durante a faculdade de engenharia de software para contribuir com soluções criativas e eficientes. Estou empenhado em aprender, crescer profissionalmente e trabalhar em equipe, buscando oportunidades que me permitam aplicar meus conhecimentos e colaborar no desenvolvimento de projetos inovadores.",
        personalDataTitle: "Dados Pessoais",
        dob: "Data de nascimento: 07 de Outubro de 2002",
        age: "Idade: 22 anos",
        gender: "Gênero: Masculino",
        address: "Endereço: Rua Felipe Schmidt 333, Criciúma, Santa Catarina",
        email: "Email: jeffalexandrino07@gmail.com",
        phone: "Telefone: 48 99976-8330",
        experienceTitle: "Experiência",
        job1Title: "Estagiário Sucesso do Cliente - Serviços",
        job1Company: "Empresa: Betha Sistemas",
        job1Period: "Período: set 2023 - nov 2023",
        job2Title: "Auxiliar de Professor de Informática",
        job2Company: "Empresa: Satc",
        job2Period: "Período: ago 2021 - dez 2022",
        job3Title: "Estagiário de Pesquisa",
        job3Company: "Empresa: UniSatc",
        job3Period: "Período: jun 2021 - jun 2023",
        educationTitle: "Formação",
        degree1: "Bacharelado - Engenharia de Software (atual)",
        school1: "Unisatc, Criciúma",
        degree2: "Língua Japonesa (atual)",
        school2: "Mundo Idiomas, Criciúma",
        degree3: "Ensino Médio (dez 2020)",
        school3: "Colégio São Bento, Criciúma",
        degree4: "Língua Inglesa (fev 2019)",
        school4: "Rockfeller, Criciúma",
        skillsTitle: "Competências",
        interestsTitle: "Interesses",
        interests: ["Tecnologia", "Jogos digitais", "Estudo de linguagem estrangeira", "Livros", "História", "Anime"]
    },

    jp: {
        headerName: "ジェファーソン・バルザン・アレクサンドリーノ",
        linksTitle: "リンク",
        aboutTitle: "自己紹介",
        aboutText: "ソフトウェア工学の学習を通じて得たスキルを活かし、創造的で効率的なソリューションを提供することで、就職市場に参入することを目指しています。学ぶこと、プロとして成長すること、チームで働くことに意欲的であり、知識を活かして革新的なプロジェクトに貢献できる機会を探しています。",
        personalDataTitle: "個人情報",
        dob: "生年月日: 2002年10月7日",
        age: "年齢: 22歳",
        gender: "性別: 男性",
        address: "住所: ルア・フェリペ・シュミット333, クリシューマ, サンタカタリーナ",
        email: "メール: jeffalexandrino07@gmail.com",
        phone: "電話: +55 48 99976-8330",
        experienceTitle: "職務経験",
        job1Title: "カスタマーサクセスインターン - サービス",
        job1Company: "会社: ベサ・システマス",
        job1Period: "期間: 2023年9月 - 2023年11月",
        job2Title: "情報学補助教員",
        job2Company: "会社: サッツ",
        job2Period: "期間: 2021年8月 - 2022年12月",
        job3Title: "研究インターン",
        job3Company: "会社: ユニサッツ",
        job3Period: "期間: 2021年6月 - 2023年6月",
        educationTitle: "学歴",
        degree1: "学士 - ソフトウェア工学 (在学中)",
        school1: "ユニサッツ, クリシューマ",
        degree2: "日本語 (在学中)",
        school2: "ムンド・イディオマス, クリシューマ",
        degree3: "高校卒業 (2020年12月)",
        school3: "サンベント高校, クリシューマ",
        degree4: "英語 (2019年2月)",
        school4: "ロックフェラー, クリシューマ",
        skillsTitle: "スキル",
        interestsTitle: "興味",
        interests: ["テクノロジー", "デジタルゲーム", "外国語の学習", "本", "歴史", "アニメ"]
    }
};

function changeLanguage(lang) {
    document.querySelector('h1').innerText = translations[lang].headerName;
    document.querySelector('#links h2').innerText = translations[lang].linksTitle;
    document.querySelector('#sobre-mim h2').innerText = translations[lang].aboutTitle;
    document.querySelector('#sobre-mim p').innerText = translations[lang].aboutText;
    document.querySelector('#dados h2').innerText = translations[lang].personalDataTitle;
    document.querySelector('#dados li:nth-child(1)').innerText = translations[lang].dob;
    document.querySelector('#dados li:nth-child(2)').innerText = translations[lang].age;
    document.querySelector('#dados li:nth-child(3)').innerText = translations[lang].gender;
    document.querySelector('#dados li:nth-child(4)').innerText = translations[lang].address;
    document.querySelector('#dados li:nth-child(5)').innerText = translations[lang].email;
    document.querySelector('#dados li:nth-child(6)').innerText = translations[lang].phone;
    document.querySelector('#experiencia h2').innerText = translations[lang].experienceTitle;
    document.querySelector('#experiencia .job:nth-child(1) h3').innerText = translations[lang].job1Title;
    document.querySelector('#experiencia .job:nth-child(1) p:nth-child(2)').innerText = translations[lang].job1Company;
    document.querySelector('#experiencia .job:nth-child(1) p:nth-child(3)').innerText = translations[lang].job1Period;
    document.querySelector('#experiencia .job:nth-child(2) h3').innerText = translations[lang].job2Title;
    document.querySelector('#experiencia .job:nth-child(2) p:nth-child(2)').innerText = translations[lang].job2Company;
    document.querySelector('#experiencia .job:nth-child(2) p:nth-child(3)').innerText = translations[lang].job2Period;
    document.querySelector('#experiencia .job:nth-child(3) h3').innerText = translations[lang].job3Title;
    document.querySelector('#experiencia .job:nth-child(3) p:nth-child(2)').innerText = translations[lang].job3Company;
    document.querySelector('#experiencia .job:nth-child(3) p:nth-child(3)').innerText = translations[lang].job3Period;
    document.querySelector('#formacao h2').innerText = translations[lang].educationTitle;
    document.querySelector('#formacao .formacao-item:nth-child(1) h3').innerText = translations[lang].degree1;
    document.querySelector('#formacao .formacao-item:nth-child(1) p').innerText = translations[lang].school1;
    document.querySelector('#formacao .formacao-item:nth-child(2) h3').innerText = translations[lang].degree2;
    document.querySelector('#formacao .formacao-item:nth-child(2) p').innerText = translations[lang].school2;
    document.querySelector('#formacao .formacao-item:nth-child(3) h3').innerText = translations[lang].degree3;
    document.querySelector('#formacao .formacao-item:nth-child(3) p').innerText = translations[lang].school3;
    document.querySelector('#formacao .formacao-item:nth-child(4) h3').innerText = translations[lang].degree4;
    document.querySelector('#formacao .formacao-item:nth-child(4) p').innerText = translations[lang].school4;
    document.querySelector('#competencias h2').innerText = translations[lang].skillsTitle;
    document.querySelector('#interesses h2').innerText = translations[lang].interestsTitle;
    const interestsList = document.querySelector('#interesses ul');
    interestsList.innerHTML = '';
    translations[lang].interests.forEach(interest => {
        const li = document.createElement('li');
        li.innerText = interest;
        interestsList.appendChild(li);
    });
}
