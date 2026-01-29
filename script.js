const curriculum = {
    "1º Semestre": {
        id: "sem1",
        subjects: [
            { id: "comp_soc", name: "Computação e Sociedade", hrs: 60, pre: [] },
            { id: "fund_calc", name: "Fundamentos de Cálculo", hrs: 60, pre: [] },
            { id: "geo_anal", name: "Geometria Analítica", hrs: 60, pre: [] },
            { id: "intro_comp", name: "Introdução a Computação", hrs: 60, pre: [] },
            { id: "intro_log", name: "Introdução a Lógica", hrs: 60, pre: [] }
        ]
    },
    "2º Semestre": {
        id: "sem2",
        subjects: [
            { id: "anal_text", name: "Análise e Expressão Textual", hrs: 60, pre: [] },
            { id: "calc_dif", name: "Cálculo Diferencial e Integral", hrs: 60, pre: ["fund_calc"] },
            { id: "alg_lin", name: "Álgebra Linear", hrs: 60, pre: ["geo_anal"] },
            { id: "prog_comp", name: "Programação de Computadores", hrs: 60, pre: ["intro_comp"] },
            { id: "circ_dig", name: "Circuitos Digitais", hrs: 60, pre: [] }
        ]
    },
    "3º Semestre": {
        id: "sem3",
        subjects: [
            { id: "fil_cienc", name: "Filosofia da Ciência", hrs: 60, pre: [] },
            { id: "estat", name: "Estatística", hrs: 60, pre: ["calc_dif"] },
            { id: "bd", name: "Banco de Dados", hrs: 60, pre: [] },
            { id: "mat_disc", name: "Matemática Discreta", hrs: 60, pre: [] },
            { id: "poo", name: "Programação Orientada a Objetos", hrs: 60, pre: ["prog_comp"] },
            { id: "arq_comp", name: "Arquitetura e Org. Computadores", hrs: 60, pre: ["circ_dig"] }
        ]
    },
    "4º Semestre": {
        id: "sem4",
        subjects: [
            { id: "calc_num", name: "Cálculo Numérico", hrs: 60, pre: ["calc_dif", "alg_lin"] },
            { id: "apoo", name: "Análise e Projeto OO", hrs: 60, pre: ["poo"] },
            { id: "lfa", name: "Linguagens Formais e Autômatos", hrs: 60, pre: ["mat_disc"] },
            { id: "ed1", name: "Estrutura de Dados I", hrs: 60, pre: ["poo"] },
            { id: "so", name: "Sistemas Operacionais", hrs: 60, pre: ["arq_comp"] },
            { id: "opt1", name: "Optativa I", hrs: 60, isOptativa: true }
        ]
    },
    "5º Semestre": {
        id: "sem5",
        subjects: [
            { id: "redes", name: "Redes de Computadores", hrs: 60, pre: ["circ_dig"] },
            { id: "ia", name: "Inteligência Artificial", hrs: 60, pre: ["poo"] },
            { id: "teoria_comp", name: "Teoria da Computação", hrs: 60, pre: ["lfa"] },
            { id: "ed2", name: "Estrutura de Dados II", hrs: 60, pre: ["ed1"] },
            { id: "eng_soft", name: "Engenharia de Software", hrs: 60, pre: ["apoo"] },
            { id: "opt2", name: "Optativa II", hrs: 60, isOptativa: true }
        ]
    },
    "6º Semestre": {
        id: "sem6",
        subjects: [
            { id: "sist_dist", name: "Sistemas Distribuídos", hrs: 60, pre: ["so", "redes"] },
            { id: "compil", name: "Compiladores", hrs: 60, pre: ["lfa"] },
            { id: "anal_alg", name: "Análise de Algoritmos", hrs: 60, pre: ["ed2"] },
            { id: "teoria_graf", name: "Teoria dos Grafos", hrs: 60, pre: ["ed1"] },
            { id: "opt3", name: "Optativa III", hrs: 60, isOptativa: true },
            { id: "opt4", name: "Optativa IV", hrs: 60, isOptativa: true }
        ]
    },
    "7º Semestre": {
        id: "sem7",
        subjects: [
            { id: "comp_graf", name: "Computação Gráfica", hrs: 60, pre: ["ed2", "alg_lin"] },
            { id: "multimidia", name: "Sistemas Multimídia", hrs: 60, pre: ["ed2", "redes"] },
            { id: "opt5", name: "Optativa V", hrs: 60, isOptativa: true },
            { id: "opt6", name: "Optativa VI", hrs: 60, isOptativa: true },
            { id: "opt7", name: "Optativa VII", hrs: 60, isOptativa: true }
        ]
    },
    "8º Semestre": {
        id: "sem8",
        subjects: [
            { id: "seg_comp", name: "Segurança Computacional", hrs: 60, pre: ["redes"] },
            { id: "emp", name: "Empreendedorismo", hrs: 60, pre: [] },
            { id: "opt8", name: "Optativa VIII", hrs: 60, isOptativa: true },
            { id: "opt9", name: "Optativa IX", hrs: 60, isOptativa: true },
            { id: "opt10", name: "Optativa X", hrs: 60, isOptativa: true }
        ]
    }
};

const electiveSubjects = [
    { name: "Arquitetura de Software", pre: ["poo_analise"] },
    { name: "Aprendizagem de Máquina", pre: ["est_dados1", "alg_linear"] },
    { name: "Automação e Controle", pre: ["circ_dig"] },
    { name: "Banco de Dados Não Convencionais", pre: ["bd"] },
    { name: "Cálculo I", pre: [] },
    { name: "Cálculo II", pre: [] },
    { name: "Computação Paralela", pre: ["arq_comp", "redes"] },
    { name: "Criptografia", pre: ["mat_disc", "poo"] },
    { name: "Desenvolvimento de Código Seguro", pre: ["poo", "est_dados2"] },
    { name: "Desenvolvimento para Dispositivos Móveis", pre: ["poo", "poo_analise"] },
    { name: "Eletricidade e Magnetismo", pre: [] },
    { name: "Engenharia de Requisitos", pre: ["eng_soft"] },
    { name: "Equações Diferenciais", pre: [] },
    { name: "Fundamentos da Filosofia", pre: [] },
    { name: "Fundamentos de Economia", pre: [] },
    { name: "Fundamentos de Marketing", pre: [] },
    { name: "Gestão de Projetos", pre: ["eng_soft"] },
    { name: "Interação Humano-Computador", pre: ["poo_analise"] },
    { name: "Interconexão de Redes", pre: ["redes"] },
    { name: "Introdução a Administração", pre: [] },
    { name: "Introdução a Contabilidade", pre: [] },
    { name: "Introdução a Funções de Várias Variáveis", pre: [] },
    { name: "Introdução a Microeletrônica", pre: ["circ_dig"] },
    { name: "Introdução a Robótica", pre: ["alg_linear", "prog_comp"] },
    { name: "Laboratório de Circuitos Digitais", pre: ["circ_dig"] },
    { name: "Laboratório de Matemática Aplicada", pre: ["calc_num"] },
    { name: "Laboratório de Programação", pre: ["prog_comp"] },
    { name: "Laboratório de Programação Orientada a Objetos", pre: ["poo_analise", "bd"] },
    { name: "Libras", pre: [] },
    { name: "Linguagem de Descrição de Hardware", pre: ["circ_dig"] },
    { name: "Mecânica Clássica", pre: [] },
    { name: "Microprocessadores e Microcontroladores", pre: ["arq_comp"] },
    { name: "Ondas e Termodinâmica", pre: [] },
    { name: "Pesquisa Operacional", pre: ["prog_comp", "alg_linear"] },
    { name: "Prática de Ensino I: educação em computação (EAD)", pre: [] },
    { name: "Prática de Ensino III: objetos digitais de educação em computação (EAD)", pre: [] },
    { name: "Princípios e Técnicas Estatísticas para Análise Experimental", pre: ["estat", "prog_comp"] },
    { name: "Processamento Digital de Imagens", pre: ["calc_num"] },
    { name: "Programação de Jogos", pre: ["poo"] },
    { name: "Programação de Jogos 3D", pre: [] },
    { name: "Programação Distribuída", pre: ["sist_dist"] },
    { name: "Programação Orientada a Aspectos", pre: ["poo"] },
    { name: "Programação WEB", pre: ["poo", "bd"] },
    { name: "Qualidade de Software", pre: ["eng_soft"] },
    { name: "Sistemas de Informação Geográficas", pre: ["bd"] },
    { name: "Sistemas de Tempo Real", pre: ["eng_soft"] },
    { name: "Sistemas Embarcados", pre: ["prog_comp"] },
    { name: "Sociologia", pre: [] },
    { name: "Software Básico", pre: ["arq_comp"] },
    { name: "Teste de Software", pre: ["eng_soft"] },
    { name: "Tópicos Especiais em Modelos Probabilísticos", pre: ["estat", "analise_alg"] },
    { name: "Tópicos Especiais em Banco de Dados", pre: ["bd"] },
    { name: "Tópicos Especiais em Compiladores", pre: ["comp"] },
    { name: "Tópicos Especiais em Engenharia de Software", pre: ["eng_soft"] },
    { name: "Tópicos Especiais em Hardware", pre: ["arq_comp"] },
    { name: "Tópicos Especiais em Inteligência Artificial", pre: ["ia"] },
    { name: "Tópicos Especiais em Processamento e Exibição de Mídias", pre: ["comp_graf"] },
    { name: "Tópicos Especiais em Redes de Computadores", pre: ["redes"] },
    { name: "Tópicos Especiais em Sistemas Distribuídos", pre: ["sist_dist"] }
];

if (window.gradeAppInitialized) {
    console.warn('Grade app already initialized');
} else {
    window.gradeAppInitialized = true;

let state = {
    completed: {},
    electives: {}
};

let currentModalTarget = null;
let lines = [];
let dependencyMode = false;

window.showError = function (msg, title = 'Pré-requisito necessário') {
    const popup = document.getElementById('error-popup');
    const msgEl = document.getElementById('error-msg');
    const titleEl = popup.querySelector('h4');
    if (popup && msgEl && titleEl) {
        titleEl.textContent = title;
        msgEl.textContent = msg;
        popup.classList.remove('hidden');
        setTimeout(() => popup.classList.add('hidden'), 6000);
    }
};

window.hideError = function () {
    const popup = document.getElementById('error-popup');
    if (popup) popup.classList.add('hidden');
};

window.addEventListener('error', (event) => {
    console.error('Global Error:', event.error);
    showError(`Erro: ${event.message}`);
});

function checkWelcome() {
    const hasSeen = localStorage.getItem('hasSeenWelcome');
    if (!hasSeen) {
        const modal = document.getElementById('welcome-modal');
        if (modal) modal.classList.remove('hidden');
    }
}

window.closeWelcome = function () {
    const modal = document.getElementById('welcome-modal');
    if (modal) modal.classList.add('hidden');
    localStorage.setItem('hasSeenWelcome', 'true');
};

window.resetProgress = function () {
    if (confirm("Tem certeza que deseja limpar todo o seu progresso? Isso não pode ser desfeito.")) {
        state.completed = {};
        state.electives = {};
        saveState();
        renderGrid();
        updateStats();
        if (dependencyMode) {
            drawConnections();
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    loadState();
    renderGrid();
    checkWelcome();
    renderElectivesModalList();
    updateStats();

    let resizeTimeout;
    window.addEventListener('resize', () => {
        if (!dependencyMode) return;
        if (resizeTimeout) clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            repositionLines();
        }, 100);
    });

    let ticking = false;
    const updateLines = () => {
        if (!dependencyMode) return;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                repositionLines();
                ticking = false;
            });
            ticking = true;
        }
    };

    window.addEventListener('scroll', updateLines, { passive: true });
    const mainContent = document.querySelector('.main-content');
    if (mainContent) mainContent.addEventListener('scroll', updateLines, { passive: true });
});

function loadState() {
    const saved = localStorage.getItem('gradeStateV3');
    if (saved) state = JSON.parse(saved);
}

function saveState() {
    localStorage.setItem('gradeStateV3', JSON.stringify(state));
}

function findSubjectById(id) {
    for (const semData of Object.values(curriculum)) {
        const subject = semData.subjects.find(sub => sub.id === id);
        if (subject) return subject;
    }
    return null;
}

function canCompleteSubject(subjectId) {
    const subject = findSubjectById(subjectId);
    if (!subject) return true;

    let prerequisites = subject.pre || [];

    if (subject.isOptativa && state.electives[subject.id]) {
        const elective = electiveSubjects.find(e => e.name === state.electives[subject.id]);
        if (elective?.pre) prerequisites = elective.pre;
    }

    if (prerequisites.length === 0) return true;

    return prerequisites.every(preId => state.completed[preId]);
}

function renderGrid() {
    const container = document.getElementById('grid-container');
    if (!container) return;
    container.innerHTML = '';
    let semCount = 0;

    for (const [semName, semData] of Object.entries(curriculum)) {
        const col = document.createElement('div');
        col.className = 'semester-col';
        semCount++;

        const header = document.createElement('div');
        header.className = 'semester-header';

        const title = document.createElement('h3');
        title.className = 'semester-title';
        title.innerHTML = semName;

        const badge = document.createElement('span');
        badge.className = 'semester-badge';
        badge.textContent = `${semData.subjects.length}`;

        header.appendChild(title);
        header.appendChild(badge);
        col.appendChild(header);

        semData.subjects.forEach(sub => {
            const card = document.createElement('div');
            card.id = sub.id;

            const isCompleted = state.completed[sub.id];

            if (sub.isOptativa) {
                renderOptativaCard(card, sub, isCompleted);
            } else {
                renderNormalCard(card, sub, isCompleted);
            }

            col.appendChild(card);
        });

        container.appendChild(col);
    }
}

function renderNormalCard(card, sub, isCompleted) {
    const canComplete = canCompleteSubject(sub.id);
    const isBlocked = !isCompleted && !canComplete;
    
    card.className = `subject-card ${isCompleted ? 'completed' : ''} ${isBlocked ? 'blocked' : ''}`;
    let preHtml = '';
    if (sub.pre && sub.pre.length > 0) {
        const completedPre = sub.pre.filter(preId => state.completed[preId]).length;
        const preIcon = completedPre === sub.pre.length 
            ? '<span class="material-symbols-rounded" style="font-size: 14px; vertical-align: middle;">check_circle</span>' 
            : '<span class="material-symbols-rounded" style="font-size: 14px; vertical-align: middle;">link</span>';
        preHtml = `<span class="dep-tag icon-text">${preIcon} ${completedPre}/${sub.pre.length} Pré</span>`;
    }

    card.innerHTML = `
        <div class="subject-main">
            <span class="subject-name">${sub.name}</span>
            <span class="material-symbols-rounded subject-icon">check_circle</span>
        </div>
        <div class="subject-meta">
            ${preHtml}
            <span class="hours-text">${sub.hrs}h</span>
        </div>
    `;
    card.onclick = () => toggleSubject(sub.id);
}

function renderOptativaCard(card, sub, isCompleted) {
    let filledName = state.electives[sub.id];

    if (typeof filledName === 'object' && filledName !== null) {
        filledName = filledName.name;
    }

    if (filledName) {
        const canComplete = canCompleteSubject(sub.id);
        const isBlocked = !isCompleted && !canComplete;
        
        card.className = `subject-card ${isCompleted ? 'completed' : ''} ${isBlocked ? 'blocked' : ''}`;

        window.removeElective = function (e, id) {
            e.stopPropagation();
            delete state.electives[id];
            delete state.completed[id];
            saveState();
            renderGrid();
            updateStats();
            if (dependencyMode) drawConnections();
        };

        const elective = electiveSubjects.find(e => e.name === filledName);
        let preHtml = '';
        if (elective?.pre && elective.pre.length > 0) {
            const completedPre = elective.pre.filter(preId => state.completed[preId]).length;
            const preIcon = completedPre === elective.pre.length 
                ? '<span class="material-symbols-rounded" style="font-size: 14px; vertical-align: middle;">check_circle</span>' 
                : '<span class="material-symbols-rounded" style="font-size: 14px; vertical-align: middle;">link</span>';
            preHtml = `<span class="dep-tag">${preIcon} ${completedPre}/${elective.pre.length} Pré</span>`;
        } else {
            preHtml = '<span class="dep-tag">Optativa</span>';
        }

        card.innerHTML = `
            <div class="subject-main">
                <span class="subject-name">${filledName}</span>
                <button class="icon-button remove-btn" onclick="removeElective(event, '${sub.id}')" title="Remover disciplina">
                    <span class="material-symbols-rounded" style="font-size: 16px;">close</span>
                </button>
            </div>
            <div class="subject-meta">
                ${preHtml}
                <span class="material-symbols-rounded subject-icon">check_circle</span>
            </div>
        `;
        card.onclick = () => toggleSubject(sub.id);
    } else {
        card.className = 'subject-card optativa-slot';
        card.innerHTML = `<span>+ Selecionar<br>Optativa</span>`;
        card.onclick = () => openModal(sub.id);
    }
}

function renderElectivesModalList() {
    const modalList = document.getElementById('electives-list');
    if (!modalList) return;

    modalList.innerHTML = '';
    electiveSubjects.sort((a, b) => a.name.localeCompare(b.name));
    const selectedNames = Object.values(state.electives);

    electiveSubjects.forEach(sub => {
        if (selectedNames.includes(sub.name)) return;

        const btn = document.createElement('button');
        btn.className = 'choice-chip';
        
        const hasPrereqs = sub.pre && sub.pre.length > 0;
        const canSelect = !hasPrereqs || sub.pre.every(preId => state.completed[preId]);
        
        if (!canSelect) {
            btn.classList.add('disabled');
            btn.disabled = true;
        }
        
        let preHint = '';
        if (hasPrereqs) {
            const completedCount = sub.pre.filter(preId => state.completed[preId]).length;
            const icon = canSelect 
                ? '<span class="material-symbols-rounded" style="font-size: 14px; vertical-align: middle;">check_circle</span>'
                : '<span class="material-symbols-rounded" style="font-size: 14px; vertical-align: middle;">lock</span>';
            preHint = ` <span style="font-size: 0.9em; opacity: 0.8; margin-left: 4px;">${icon} ${completedCount}/${sub.pre.length} pré-req</span>`;
        }
        
        btn.innerHTML = sub.name + preHint;
        btn.onclick = () => {
            if (canSelect) {
                selectElective(sub.name);
            } else {
                const missingPrereqs = sub.pre.filter(preId => !state.completed[preId]);
                const missingNames = missingPrereqs.map(preId => {
                    const prereqSubject = findSubjectById(preId);
                    return prereqSubject ? prereqSubject.name : preId;
                }).join(', ');
                showError(`Para escolher esta optativa, você precisa concluir: ${missingNames}`, 'Pré-requisitos não cumpridos');
            }
        };
        modalList.appendChild(btn);
    });
}

function selectElective(name) {
    if (currentModalTarget) {
        state.electives[currentModalTarget] = name;
        saveState();
        renderGrid();
        closeModal();
        
        const canComplete = canCompleteSubject(currentModalTarget);
        if (!canComplete) {
            const elective = electiveSubjects.find(e => e.name === name);
            if (elective?.pre && elective.pre.length > 0) {
                const missingPrereqs = elective.pre.filter(preId => !state.completed[preId]);
                const missingNames = missingPrereqs.map(preId => {
                    const prereqSubject = findSubjectById(preId);
                    return prereqSubject ? prereqSubject.name : preId;
                }).join(', ');
                
                showError(`Esta optativa requer: ${missingNames}`, 'Optativa com pré-requisitos');
            }
        }
        
        if (dependencyMode) drawConnections();
    }
}

function toggleSubject(id) {
    if (state.completed[id]) {
        state.completed[id] = false;
    } else {
        if (!canCompleteSubject(id)) {
            const subject = findSubjectById(id);
            let prerequisites = subject?.pre || [];
            
            if (subject?.isOptativa && state.electives[subject.id]) {
                const elective = electiveSubjects.find(e => e.name === state.electives[subject.id]);
                if (elective?.pre) prerequisites = elective.pre;
            }

            const missingPrereqs = prerequisites.filter(preId => !state.completed[preId]);
            const missingNames = missingPrereqs.map(preId => {
                const prereqSubject = findSubjectById(preId);
                return prereqSubject ? prereqSubject.name : preId;
            }).join(', ');

            showError(`Você precisa concluir antes: ${missingNames}`);
            return;
        }
        
        state.completed[id] = true;
    }
    
    saveState();

    const card = document.getElementById(id);
    if (card) {
        if (state.completed[id]) {
            card.classList.add('completed');
        } else {
            card.classList.remove('completed');
        }
    }

    updateStats();

    updateAllCardStates();

    if (dependencyMode) {
        updateConnectionStates();
    }
}

function updateAllCardStates() {
    Object.values(curriculum).forEach(semData => {
        semData.subjects.forEach(sub => {
            const card = document.getElementById(sub.id);
            if (card) {
                const isCompleted = state.completed[sub.id];
                
                if (sub.isOptativa) {
                    renderOptativaCard(card, sub, isCompleted);
                } else {
                    renderNormalCard(card, sub, isCompleted);
                }
            }
        });
    });
}

function updateConnectionStates() {
    if (lines.length === 0) return;

    const isMobile = window.innerWidth < 800;
    const isHorizontal = layoutMode === 'horizontal' && !isMobile;
    const config = {
        path: isHorizontal ? 'grid' : 'magnet',
        startSocket: isHorizontal ? 'right' : 'bottom',
        endSocket: isHorizontal ? 'left' : 'top',
        gravity: isHorizontal ? [100, 0] : [0, 50]
    };

    lines.forEach(line => {
        if (!line._meta) return;

        const { subId, preId } = line._meta;
        const isDone = state.completed[subId] && state.completed[preId];
        const isReady = !isDone && state.completed[preId];

        try {
            const style = getLineStyle(isDone, isReady, config);
            line.setOptions({
                color: style.color,
                size: style.size,
                dash: style.dash
            });
        } catch (e) { }
    });
}

window.openPrereqMap = function() {
    const modal = document.getElementById('prereq-map-modal');
    const content = document.getElementById('prereq-map-content');
    
    if (modal && content) {
        content.innerHTML = generatePrereqMapHTML();
        modal.classList.remove('hidden');
    }
};

window.closePrereqMap = function() {
    const modal = document.getElementById('prereq-map-modal');
    if (modal) modal.classList.add('hidden');
};

function generatePrereqMapHTML() {
    let html = '<div class="prereq-legend">';
    html += '<span class="legend-item"><span class="legend-dot completed"></span> Concluída</span>';
    html += '<span class="legend-item"><span class="legend-dot available"></span> Disponível</span>';
    html += '<span class="legend-item"><span class="legend-dot blocked"></span> Bloqueada</span>';
    html += '</div>';
    
    html += '<div class="prereq-grid">';
    
    Object.entries(curriculum).forEach(([semName, semData]) => {
        html += `<div class="prereq-semester">`;
        html += `<h4 class="prereq-sem-title">${semName}</h4>`;
        
        semData.subjects.forEach(sub => {
            const isCompleted = state.completed[sub.id];
            const canComplete = canCompleteSubject(sub.id);
            let statusClass = 'blocked';
            if (isCompleted) statusClass = 'completed';
            else if (canComplete) statusClass = 'available';
            
            let subName = sub.name;
            if (sub.isOptativa && state.electives[sub.id]) {
                subName = state.electives[sub.id];
            }
            
            const prerequisites = sub.pre || [];
            let prereqHTML = '';
            if (prerequisites.length > 0) {
                const prereqNames = prerequisites.map(preId => {
                    const prereq = findSubjectById(preId);
                    const preCompleted = state.completed[preId];
                    return `<span class="prereq-tag ${preCompleted ? 'done' : 'pending'}">${prereq ? prereq.name : preId}</span>`;
                }).join('');
                prereqHTML = `<div class="prereq-requires">Requer: ${prereqNames}</div>`;
            }
            
            const dependents = findDependentSubjects(sub.id);
            let dependentHTML = '';
            if (dependents.length > 0) {
                const depNames = dependents.map(dep => {
                    return `<span class="prereq-tag dependent">${dep.name}</span>`;
                }).join('');
                dependentHTML = `<div class="prereq-unlocks">Libera: ${depNames}</div>`;
            }
            
            html += `
                <div class="prereq-item ${statusClass}">
                    <div class="prereq-name">${subName}</div>
                    ${prereqHTML}
                    ${dependentHTML}
                </div>
            `;
        });
        
        html += '</div>';
    });
    
    html += '</div>';
    return html;
}

function findDependentSubjects(subjectId) {
    const dependents = [];
    Object.values(curriculum).forEach(semData => {
        semData.subjects.forEach(sub => {
            if (sub.pre && sub.pre.includes(subjectId)) {
                dependents.push(sub);
            }
        });
    });
    return dependents;
}

function updateStats() {
    let totalSubs = 0;
    let doneSubs = 0;
    let totalHrs = 0;

    Object.values(curriculum).forEach(sem => {
        sem.subjects.forEach(sub => {
            totalSubs++;
            if (state.completed[sub.id]) {
                doneSubs++;
                totalHrs += sub.hrs;
            }
        });
    });

    const percent = totalSubs === 0 ? 0 : Math.round((doneSubs / totalSubs) * 100);
    const pDisplay = document.getElementById('percent-display');
    const hDisplay = document.getElementById('hours-display');
    if (pDisplay) pDisplay.textContent = `${percent}%`;
    if (hDisplay) hDisplay.textContent = `${totalHrs}h`;

    if (percent === 100 && totalSubs > 0) {
        const modal = document.getElementById('success-modal');
        if (modal && modal.classList.contains('hidden')) {
            modal.classList.remove('hidden');
        }
    }
}

let layoutMode = 'horizontal';

let currentTheme = localStorage.getItem('theme') || 'dark';

setTheme(currentTheme);

function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    const btn = document.getElementById('btn-theme-toggle');
    const icon = btn ? btn.querySelector('span') : null;
    if (icon) {
        if (theme === 'light') icon.textContent = 'dark_mode';
        else if (theme === 'dark') icon.textContent = 'contrast';
        else icon.textContent = 'light_mode';
    }
}

window.toggleTheme = function() {
    if (currentTheme === 'light') setTheme('dark');
    else if (currentTheme === 'dark') setTheme('darker');
    else setTheme('light');

    if (dependencyMode) {
        drawConnections();
    }
};

window.setMode = function(mode) {
    const btnGrid = document.getElementById('btn-grid-view');
    const btnDep = document.getElementById('btn-dependency-mode');

    if (mode === 'dependency') {
        dependencyMode = true;
        if (btnDep) btnDep.classList.add('active');
        if (btnGrid) btnGrid.classList.remove('active');
        drawConnections();
    } else {
        dependencyMode = false;
        if (btnDep) btnDep.classList.remove('active');
        if (btnGrid) btnGrid.classList.add('active');
        removeConnections();
    }
};

window.toggleLayout = function() {
    const container = document.getElementById('grid-container');
    const btnLayout = document.getElementById('btn-layout-toggle');
    const icon = btnLayout ? btnLayout.querySelector('span') : null;

    removeConnections();

    if (layoutMode === 'horizontal') {
        layoutMode = 'vertical';
        container.className = 'grid-layout vertical';
        if (icon) icon.textContent = 'grid_on';
    } else if (layoutMode === 'vertical') {
        layoutMode = 'masonry';
        container.className = 'grid-layout masonry';
        if (icon) icon.textContent = 'dashboard';
    } else {
        layoutMode = 'horizontal';
        container.className = 'grid-layout';
        if (icon) icon.textContent = 'view_week';
    }

    if (dependencyMode) {
        setTimeout(drawConnections, 400);
    }
};

let linesUpdateTimeout = null;
let isDrawing = false;

function drawConnections() {
    if (isDrawing) return;
    if (linesUpdateTimeout) {
        cancelAnimationFrame(linesUpdateTimeout);
        linesUpdateTimeout = null;
    }

    isDrawing = true;
    removeConnections();

    if (typeof LeaderLine === 'undefined') {
        console.error('LeaderLine not loaded');
        isDrawing = false;
        return;
    }

    const isMobile = window.innerWidth < 800;
    const isHorizontal = layoutMode === 'horizontal' && !isMobile;

    const config = {
        path: isHorizontal ? 'grid' : 'magnet',
        startSocket: isHorizontal ? 'right' : 'bottom',
        endSocket: isHorizontal ? 'left' : 'top',
        gravity: isHorizontal ? [100, 0] : [0, 50]
    };

    const connections = [];

    Object.values(curriculum).forEach(semData => {
        semData.subjects.forEach(sub => {
            let prerequisites = sub.pre || [];

            if (sub.isOptativa && state.electives[sub.id]) {
                const elective = electiveSubjects.find(e => e.name === state.electives[sub.id]);
                if (elective?.pre) prerequisites = elective.pre;
            }

            prerequisites.forEach(preId => {
                const startEl = document.getElementById(preId);
                const endEl = document.getElementById(sub.id);
                if (startEl && endEl) {
                    connections.push({ startEl, endEl, subId: sub.id, preId });
                }
            });
        });
    });

    connections.sort((a, b) => {
        const aDone = state.completed[a.subId] && state.completed[a.preId];
        const bDone = state.completed[b.subId] && state.completed[b.preId];
        const aReady = !aDone && state.completed[a.preId];
        const bReady = !bDone && state.completed[b.preId];

        if (aReady && !bReady) return -1;
        if (bReady && !aReady) return 1;
        if (aDone && !bDone) return -1;
        if (bDone && !aDone) return 1;
        return 0;
    });

    const fragment = document.createDocumentFragment();

    connections.forEach(({ startEl, endEl, subId, preId }) => {
        const isDone = state.completed[subId] && state.completed[preId];
        const isReady = !isDone && state.completed[preId];

        try {
            const lineOptions = getLineStyle(isDone, isReady, config);
            const line = new LeaderLine(startEl, endEl, lineOptions);
            line._meta = { subId, preId, isDone, isReady };
            lines.push(line);
        } catch (e) { }
    });

    isDrawing = false;
}

function getLineStyle(isDone, isReady, config) {
    const base = {
        path: config.path,
        startSocket: config.startSocket,
        endSocket: config.endSocket,
        startSocketGravity: config.gravity,
        endSocketGravity: config.gravity
    };

    if (isDone) {
        return {
            ...base,
            color: currentTheme === 'darker' ? 'rgba(56, 189, 248, 0.5)' : 'rgba(2, 136, 209, 0.5)',
            size: 2,
            dash: false
        };
    } else if (isReady) {
        return {
            ...base,
            color: currentTheme === 'darker' ? '#fbbf24' : '#f59e0b',
            size: 3,
            dash: { animation: true, len: 10, gap: 6 },
            dropShadow: { dx: 0, dy: 0, blur: 4, color: currentTheme === 'darker' ? '#fbbf24' : '#f59e0b' }
        };
    } else {
        return {
            ...base,
            color: currentTheme === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.06)',
            size: 1,
            dash: { len: 2, gap: 6 }
        };
    }
}

function repositionLines() {
    if (lines.length === 0) return;

    requestAnimationFrame(() => {
        lines.forEach(line => {
            try { line.position(); } catch (e) { }
        });
    });
}

function removeConnections() {
    if (lines.length === 0) return;

    lines.forEach(l => {
        try { l.remove(); } catch (e) { }
    });
    lines = [];
}

const modal = document.getElementById('elective-modal');
const modalList = document.getElementById('electives-list');
const searchInput = document.getElementById('elective-search');

function openModal(targetId) {
    currentModalTarget = targetId;
    if (modal) modal.classList.remove('hidden');
    if (searchInput) searchInput.value = '';
    filterElectives();
}

function closeModal() {
    if (modal) modal.classList.add('hidden');
    currentModalTarget = null;
}

function filterElectives() {
    if (!searchInput || !modalList) return;
    const term = searchInput.value.toLowerCase();
    const items = modalList.querySelectorAll('.choice-chip');
    items.forEach(i => {
        i.style.display = i.textContent.toLowerCase().includes(term) ? 'block' : 'none';
    });
}

window.downloadPDF = function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    doc.setFillColor(56, 189, 248);
    doc.rect(0, 0, pageWidth, 40, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text("Histórico de Progresso", 20, 20);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Ciência da Computação - UFERSA / CACC", 20, 30);

    let totalHrs = 0;
    let doneCount = 0;
    let totalCount = 0;
    Object.values(curriculum).forEach(sem => sem.subjects.forEach(sub => {
        totalCount++;
        if (state.completed[sub.id]) { totalHrs += sub.hrs; doneCount++; }
    }));

    const percent = totalCount === 0 ? 0 : Math.round((doneCount / totalCount) * 100);

    doc.setFontSize(10);
    doc.text(`Progresso: ${percent}%`, 140, 15);
    doc.text(`Horas Concluídas: ${totalHrs}h`, 140, 22);
    doc.text(`Matérias: ${doneCount} / ${totalCount}`, 140, 29);

    let y = 55;

    for (const [semName, semData] of Object.entries(curriculum)) {
        if (y > 270) { doc.addPage(); y = 20; }

        doc.setFillColor(240, 249, 255);
        doc.rect(15, y - 6, pageWidth - 30, 10, 'F');

        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(2, 132, 199);
        doc.text(semName, 20, y);
        y += 10;

        semData.subjects.forEach(sub => {
            let name = sub.name;
            if (sub.isOptativa && state.electives[sub.id]) {
                name = `${state.electives[sub.id]} (Optativa)`;
            }

            const isDone = state.completed[sub.id];
            const status = isDone ? "CONCLUÍDO" : "PENDENTE";

            doc.setFontSize(10);
            doc.setFont("helvetica", isDone ? "bold" : "normal");

            if (isDone) doc.setTextColor(22, 163, 74);
            else doc.setTextColor(148, 163, 184);

            doc.text(status, 160, y);

            doc.setTextColor(51, 65, 85);
            doc.text(name, 20, y);

            doc.setFont("helvetica", "normal");
            doc.setTextColor(100, 116, 139);
            doc.text(`${sub.hrs}h`, 130, y);

            doc.setDrawColor(226, 232, 240);
            doc.line(20, y + 2, 190, y + 2);

            y += 8;
            if (y > 280) { doc.addPage(); y = 20; }
        });

        y += 6;
    }

    const date = new Date().toLocaleDateString('pt-BR');
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text(`Gerado em ${date} via Grade CACC`, 20, 290);

    doc.save("historico-cacc.pdf");
};

} // End of initialization guard