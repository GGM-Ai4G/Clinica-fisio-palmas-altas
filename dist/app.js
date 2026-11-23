const pages = {
  direccion: { title: "Panel de dirección", action: "+ Nueva cita" },
  agenda: { title: "Agenda inteligente", action: "+ Nueva cita" },
  pacientes: { title: "Pacientes e historia clínica", action: "+ Nuevo paciente" },
  bonos: { title: "Bonos, cuotas y cobros", action: "+ Registrar cobro" },
  crm: { title: "CRM comercial", action: "+ Nuevo contacto" },
  automatizaciones: { title: "Automatizaciones", action: "+ Nueva regla" },
  ia: { title: "Asistente AI4G", action: "Generar informe" },
  portal: { title: "Portal del paciente", action: "Vista paciente" }
};

const content = document.getElementById("app-content");
const pageTitle = document.getElementById("page-title");
const quickAction = document.getElementById("quick-action");
const toast = document.getElementById("toast");
const modalBackdrop = document.getElementById("modal-backdrop");
const modalContent = document.getElementById("modal-content");
let currentPage = "direccion";

const euros = n => new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

function metric(label, value, trend, icon, accent = "#0b7b72", soft = "#dff3ef") {
  return `<article class="metric-card" style="--accent:${accent};--accent-soft:${soft}">
    <div class="metric-label"><span>${label}</span><span class="metric-icon">${icon}</span></div>
    <div class="metric-value">${value}</div><div class="trend ${trend.includes("−") ? "down" : ""}">${trend}</div>
  </article>`;
}

function directionPage() {
  const months = [[54,39],[61,45],[68,50],[59,43],[76,56],[88,65],[82,62],[94,70],[100,74],[92,69],[108,78],[118,84]];
  return `
    <div class="section-head"><div><h2>Buenos días, Laura</h2><p>Así marcha la clínica en noviembre. Los datos son ficticios para esta demostración.</p></div><button class="text-button" data-go="ia">Preguntar al asistente ✦</button></div>
    <div class="grid metrics-grid">
      ${metric("Facturación", "38.420 €", "+12,4% vs. octubre", "€")}
      ${metric("Margen operativo", "31,6%", "+3,1 puntos", "↗", "#6d5ec8", "#eeeafd")}
      ${metric("Ocupación global", "84%", "+6% este mes", "▦", "#a66a12", "#fff0d8")}
      ${metric("Pacientes activos", "412", "+28 altas nuevas", "◎", "#c45f4e", "#fde9e5")}
    </div>
    <div class="grid two-col">
      <article class="card"><div class="card-head"><div><h3>Evolución del negocio</h3><div class="card-sub">Ingresos y margen · últimos 12 meses</div></div><div class="mini-tabs"><button>Sem.</button><button class="active">Mes</button><button>Año</button></div></div>
        <div class="bar-chart">${months.map((m,i)=>`<div class="bar-group"><i class="bar" style="height:${m[0]}%" title="Ingresos: ${m[0]}"></i><i class="bar alt" style="height:${m[1]}%" title="Margen: ${m[1]}"></i><label>${["Dic","Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov"][i]}</label></div>`).join("")}</div>
        <div class="chart-legend"><span><i></i> Facturación</span><span><i></i> Margen</span></div>
      </article>
      <article class="card insight-card"><span class="insight-badge">OPORTUNIDAD AI4G</span><h3>Ingresos recuperables</h3><div class="insight-number">+2.860 €</div><p>Podrías capturar este mes cubriendo 11 huecos cancelados, renovando 8 bonos y reactivando 6 pacientes.</p><button data-go="ia">Ver plan recomendado</button></article>
    </div>
    <div class="grid profit-grid">
      <article class="card"><div class="card-head"><div><h3>Rentabilidad real por servicio</h3><div class="card-sub">Ingresos menos coste profesional, sala y consumibles</div></div><button class="text-button">Ver detalle</button></div>
        <table><thead><tr><th>Servicio</th><th>Ingresos</th><th>Ocupación</th><th>Margen</th></tr></thead><tbody>
          <tr><td><span class="service-cell"><i class="dot"></i>Fisioterapia deportiva</span></td><td>12.840 €</td><td>89%</td><td><span class="margin-pill">43%</span></td></tr>
          <tr><td><span class="service-cell"><i class="dot" style="background:#7668d8"></i>Suelo pélvico</span></td><td>8.260 €</td><td>82%</td><td><span class="margin-pill">39%</span></td></tr>
          <tr><td><span class="service-cell"><i class="dot" style="background:#b1cf76"></i>Pilates terapéutico</span></td><td>6.940 €</td><td>93%</td><td><span class="margin-pill">34%</span></td></tr>
          <tr><td><span class="service-cell"><i class="dot" style="background:#ef826f"></i>Entrenamiento funcional</span></td><td>5.720 €</td><td>76%</td><td><span class="margin-pill">28%</span></td></tr>
        </tbody></table>
      </article>
      <article class="card"><div class="card-head"><div><h3>Oportunidades detectadas</h3><div class="card-sub">Priorizadas por impacto estimado</div></div></div><div class="opportunity-list">
        <div class="opportunity"><span class="ico">↗</span><div><b>Abrir Pilates los martes a las 18:00</b><small>Demanda en espera: 9 personas · impacto +680 €/mes</small></div></div>
        <div class="opportunity"><span class="ico">⌁</span><div><b>Ofrecer funcional tras el alta</b><small>17 pacientes terminan tratamiento este mes</small></div></div>
        <div class="opportunity"><span class="ico">⟳</span><div><b>Reactivar pacientes inactivos</b><small>24 perfiles con alta probabilidad de retorno</small></div></div>
      </div></article>
    </div>`;
}

function agendaPage() {
  const rows = ["08:00","09:00","10:00","11:00","12:00","16:00","17:00","18:00","19:00"];
  const events = {
    "0-0":["Fisio deportiva","Miguel Santos"], "0-2":["Suelo pélvico","Ana Ríos","pelvic"], "1-1":["Pilates terapéutico","8/10 plazas","class"], "1-3":["Fisio general","Carmen Díaz"], "2-0":["Valoración inicial","María León"], "2-4":["Entrenamiento funcional","10/12 plazas","class"], "3-2":["Embarazo y posparto","Lucía Vega","pelvic"], "4-1":["Fisio deportiva","Javier Alba"], "5-3":["Pilates terapéutico","10/10 · espera 3","class"], "6-0":["Fisio general","Rosa Martín"], "6-4":["Entrenamiento personal","David Gil","class"], "7-2":["Suelo pélvico","Eva Cano","pelvic"], "8-1":["Pilates máquinas","9/10 plazas","class"]
  };
  let cells = `<div class="day-head"></div>${["Lun 23","Mar 24","Mié 25","Jue 26","Vie 27"].map(x=>`<div class="day-head">${x}</div>`).join("")}`;
  rows.forEach((t,r)=>{ cells += `<div class="time">${t}</div>`; for(let c=0;c<5;c++){ const e=events[`${r}-${c}`]; cells += `<div>${e?`<div class="event ${e[2]||""}"><strong>${e[0]}</strong>${e[1]}</div>`:""}</div>`; }});
  return `<div class="toolbar"><div class="segmented"><button class="active">Semana</button><button>Día</button><button>Lista</button></div><button class="filter">‹ 23–27 noviembre ›</button><button class="filter">Todos los profesionales ⌄</button><button class="filter">Todas las salas ⌄</button></div>
    <article class="card agenda-shell"><div class="agenda-grid">${cells}</div></article>
    <div class="grid agenda-summary"><div class="summary-chip"><b>84%</b><span>Ocupación semanal</span></div><div class="summary-chip"><b>3</b><span>Personas en lista de espera</span></div><div class="summary-chip"><b>2</b><span>Huecos disponibles hoy</span></div></div>`;
}

const patients = [
  ["María León","ML","Suelo pélvico · Activa"],["Miguel Santos","MS","Fisio deportiva · Activo"],["Ana Ríos","AR","Embarazo · Activa"],["Carmen Díaz","CD","Fisio general · Activa"],["Javier Alba","JA","Readaptación · Activo"],["Eva Cano","EC","Posparto · Activa"]
];
function patientDetail(index=0) {
  const p=patients[index];
  return `<div class="patient-header"><span class="patient-avatar">${p[1]}</span><div><h2>${p[0]}</h2><p>Paciente #00${124+index} · ${p[2]}</p></div><div class="actions"><button class="secondary-button">Enviar mensaje</button><button class="primary-button" data-modal="session">+ Nueva sesión</button></div></div>
    <div class="record-tabs"><button class="active">Resumen</button><button>Historia clínica</button><button>Documentos</button><button>Comunicaciones</button><button>Facturación</button></div>
    <div class="grid record-grid"><div class="info-box"><span>Próxima cita</span><b>25 nov · 10:00</b></div><div class="info-box"><span>Profesional</span><b>Laura Moreno</b></div><div class="info-box"><span>Plantilla clínica</span><b>${index===0?"PERFECT · Suelo pélvico":"Fisioterapia general"}</b></div><div class="info-box"><span>Objetivo</span><b>Recuperación funcional</b></div><div class="info-box"><span>Sesiones</span><b>5 de 8 completadas</b></div><div class="info-box"><span>Consentimientos</span><b>Firmados · 12/11/26</b></div></div>
    <div class="timeline"><div class="timeline-item"><b>18 nov · Evolución favorable</b><p>Mejora de síntomas y adherencia al programa domiciliario. Se mantienen pautas y progresión.</p></div><div class="timeline-item"><b>11 nov · Valoración sucesiva</b><p>Escala registrada en plantilla específica. Documento firmado por profesional.</p></div><div class="timeline-item"><b>04 nov · Valoración inicial</b><p>Objetivos terapéuticos definidos y consentimiento informado registrado.</p></div></div>`;
}
function pacientesPage() {
  return `<div class="split-view"><article class="card list-card"><div class="search-box"><input id="patient-search" placeholder="Buscar paciente…"></div><div id="patient-list">${patients.map((p,i)=>`<button class="patient-item ${i===0?"active":""}" data-patient="${i}"><span class="patient-avatar">${p[1]}</span><span><b>${p[0]}</b><small>${p[2]}</small></span><em></em></button>`).join("")}</div></article><article class="card" id="patient-detail">${patientDetail(0)}</article></div>`;
}

function bonosPage() {
  return `<div class="section-head"><div><h2>Productos activos</h2><p>Control de consumo, renovaciones y pagos pendientes.</p></div><button class="secondary-button">Catálogo de tarifas</button></div><div class="grid package-grid">
    <article class="card package-card"><span class="status">Activo</span><h3>Bono fisioterapia 10</h3><div class="card-sub">María León · vence 18 dic</div><div class="progress"><i style="width:60%"></i></div><div class="package-meta"><span>6 consumidas</span><b>4 restantes</b></div></article>
    <article class="card package-card"><span class="status warning">Renovar</span><h3>Pilates · 2 días/semana</h3><div class="card-sub">Rosa Martín · renueva 30 nov</div><div class="progress"><i style="width:86%"></i></div><div class="package-meta"><span>12 asistencias</span><b>2 restantes</b></div></article>
    <article class="card package-card"><span class="status danger">Pendiente</span><h3>Funcional ilimitado</h3><div class="card-sub">David Gil · cuota noviembre</div><div class="progress"><i style="width:100%;background:#ef826f"></i></div><div class="package-meta"><span>Pago rechazado</span><b>69 €</b></div></article>
  </div><div class="grid billing-grid"><article class="card"><div class="card-head"><div><h3>Últimos movimientos</h3><div class="card-sub">Cobros conectados con reservas y asistencias</div></div><button class="text-button">Exportar</button></div><table><thead><tr><th>Cliente</th><th>Concepto</th><th>Método</th><th>Importe</th><th>Estado</th></tr></thead><tbody>
    <tr><td>Ana Ríos</td><td>Bono fisio 5</td><td>Tarjeta</td><td>225 €</td><td><span class="status">Cobrado</span></td></tr><tr><td>Javier Alba</td><td>Sesión individual</td><td>TPV</td><td>48 €</td><td><span class="status">Cobrado</span></td></tr><tr><td>David Gil</td><td>Cuota funcional</td><td>Domiciliación</td><td>69 €</td><td><span class="status danger">Impago</span></td></tr><tr><td>Rosa Martín</td><td>Pilates mensual</td><td>Transferencia</td><td>78 €</td><td><span class="status warning">Conciliar</span></td></tr></tbody></table></article>
    <article class="card"><h3>Salud de cobros</h3><div class="card-sub">Noviembre 2026</div><div class="donut"></div><div class="package-meta"><span>Cobrado</span><b>34.890 €</b></div><div class="package-meta" style="margin-top:8px"><span>Pendiente</span><b>3.530 €</b></div></article></div>`;
}

const leadColumns = [
  {name:"Nuevo contacto", leads:[["Elena Suárez","Suelo pélvico · hoy","Instagram"],["Pablo Núñez","Fisio deportiva · ayer","Google"]]},
  {name:"Contactado", leads:[["Marta Ruiz","Pilates terapéutico · 2 días","Web"],["Luis Ortega","Entrenamiento · 3 días","Referido"]]},
  {name:"Cita propuesta", leads:[["Sara Vega","Embarazo · 1 día","Instagram"],["Álvaro Rey","Fisio deportiva · 4 días","Google"]]},
  {name:"Convertido", leads:[["Clara Mora","Suelo pélvico · hoy","Doctoralia"]]}
];
function crmPage() {
  return `<div class="grid crm-stats"><div class="crm-stat"><b>34</b><span>Contactos este mes</span></div><div class="crm-stat"><b>47%</b><span>Conversión a primera cita</span></div><div class="crm-stat"><b>18 €</b><span>Coste por contacto</span></div><div class="crm-stat"><b>5.840 €</b><span>Valor potencial</span></div></div>
    <div class="kanban">${leadColumns.map((col,ci)=>`<section class="kanban-col"><div class="kanban-head">${col.name}<span>${col.leads.length}</span></div>${col.leads.map((l,li)=>`<article class="lead"><h4>${l[0]}</h4><p>${l[1]}</p><div class="lead-foot"><span class="source">${l[2]}</span>${ci<3?`<button class="advance-lead" data-lead="${ci}-${li}" title="Avanzar oportunidad">›</button>`:`<span class="status">Alta</span>`}</div></article>`).join("")}</section>`).join("")}</div>`;
}

function automatizacionesPage() {
  const rules=[["⟳","Recuperar pacientes inactivos","Tras 60 días sin cita · 24 candidatos",true],["◇","Renovación de bonos","Aviso cuando quedan 2 sesiones · 8 esta semana",true],["▦","Cubrir cancelaciones","Activa la lista de espera al liberarse una plaza",true],["⌁","Seguimiento de nuevos contactos","Recordatorio a las 24 h sin reserva",true],["♡","Encuesta de satisfacción","Después del alta o la primera sesión",false],["✦","Oferta entrenamiento tras fisioterapia","Con autorización comercial y alta clínica",false]];
  return `<div class="grid automation-layout"><article class="card"><div class="card-head"><div><h3>Reglas de automatización</h3><div class="card-sub">Separación entre mensajes asistenciales y comerciales</div></div><span class="status">4 activas</span></div>${rules.map((r,i)=>`<div class="automation-row"><span class="automation-icon">${r[0]}</span><div><h4>${r[1]}</h4><p>${r[2]}</p></div><button class="toggle ${r[3]?"on":""}" data-toggle="${i}" aria-label="Activar o desactivar"><i></i></button></div>`).join("")}</article>
    <article class="card"><div class="card-head"><div><h3>Actividad reciente</h3><div class="card-sub">Impacto de los últimos 7 días</div></div></div><div class="activity-feed"><div class="feed-item"><i></i><div><b>3 huecos cubiertos automáticamente</b><small>Valor estimado recuperado: 144 €</small></div></div><div class="feed-item"><i></i><div><b>5 bonos renovados</b><small>Mensajes enviados con 62% de apertura</small></div></div><div class="feed-item"><i></i><div><b>2 pacientes reactivados</b><small>Tras 74 y 91 días de inactividad</small></div></div><div class="feed-item"><i></i><div><b>1 alta derivada a funcional</b><small>Conversión entre líneas de negocio</small></div></div></div></article></div>`;
}

function iaPage() {
  return `<div class="ai-layout"><section class="ai-hero"><div><p class="eyebrow" style="color:#dff2b8">AI4G · Inteligencia de negocio</p><h2>Pregunta a tu clínica</h2><p>Analiza ocupación, rentabilidad, pacientes y captación con datos consolidados. Nunca emite diagnósticos ni decide tratamientos.</p></div><div class="ai-orb"></div></section>
    <div class="grid prompt-grid"><button class="prompt-card" data-prompt="¿Cómo podemos aumentar la facturación un 15%?"><b>Aumentar facturación</b><span>Plan priorizado para crecer un 15%</span></button><button class="prompt-card" data-prompt="¿Qué servicios tienen mejor margen?"><b>Analizar rentabilidad</b><span>Margen por servicio y profesional</span></button><button class="prompt-card" data-prompt="¿Qué pacientes podemos reactivar?"><b>Recuperar pacientes</b><span>Oportunidades de seguimiento</span></button></div>
    <section class="chat-window" id="chat-window"><div class="message ai"><strong>Asistente AI4G</strong>Hola, Laura. He analizado los datos ficticios de noviembre. Puedes hacerme una pregunta o usar una de las sugerencias.</div><div class="chat-input"><input id="ai-input" placeholder="Ej.: ¿Cómo aumentar la facturación un 15%?"><button id="ai-send">Enviar</button></div></section></div>`;
}

function portalPage() {
  return `<div class="portal-wrap"><div class="phone"><div class="phone-screen"><div class="phone-top"><div class="hello"><div><p>Buenos días</p><h2>Hola, María</h2></div><span class="patient-avatar">ML</span></div></div><div class="phone-content"><div class="next-appointment"><small>PRÓXIMA CITA</small><h3>Suelo pélvico</h3><p>Miércoles 25 · 10:00 · Laura Moreno</p></div><div class="phone-actions"><button class="phone-action" data-portal="reserve"><span>＋</span>Reservar</button><button class="phone-action" data-portal="package"><span>◇</span>Mis bonos</button><button class="phone-action" data-portal="exercise"><span>✓</span>Ejercicios</button></div><div class="mobile-card"><h4>Próximas clases</h4><div class="class-row"><span class="class-date">MAR<br>24</span><span><b>Pilates terapéutico</b><small>18:00 · 2 plazas</small></span><button data-portal="reserve-class">Reservar</button></div></div><div class="mobile-card"><h4>Tu bono de fisioterapia</h4><div class="progress"><i style="width:60%"></i></div><div class="package-meta"><span>6 usadas</span><b>4 disponibles</b></div></div><div class="mobile-card"><h4>Programa en casa · 60%</h4><div class="class-row"><span class="class-date">✓</span><span><b>Respiración diafragmática</b><small>3 series · hoy</small></span><button data-portal="done">Hecho</button></div></div></div></div></div>
    <div class="portal-copy"><p class="eyebrow">Experiencia integrada</p><h2>Todo lo que el paciente necesita, desde el móvil</h2><p>Una experiencia clara y con la imagen de la clínica, conectada en tiempo real con agenda, clases, bonos y documentación.</p><div class="feature-check"><i>✓</i><div><b>Reserva sin llamadas</b><span>Elegir servicio, profesional y horario; cancelar según las reglas del centro.</span></div></div><div class="feature-check"><i>✓</i><div><b>Bonos, pagos y facturas</b><span>Compra simulada, consumo de sesiones y avisos antes de la renovación.</span></div></div><div class="feature-check"><i>✓</i><div><b>Seguimiento en casa</b><span>Ejercicios, vídeos y progreso compartidos por el profesional.</span></div></div><div class="feature-check"><i>✓</i><div><b>Privacidad desde el diseño</b><span>Consentimientos separados, acceso seguro y mínima información necesaria.</span></div></div></div></div>`;
}

const renderers = { direccion: directionPage, agenda: agendaPage, pacientes: pacientesPage, bonos: bonosPage, crm: crmPage, automatizaciones: automatizacionesPage, ia: iaPage, portal: portalPage };

function showPage(page, pushHash = true) {
  currentPage = pages[page] ? page : "direccion";
  document.querySelectorAll(".nav-item").forEach(btn => btn.classList.toggle("active", btn.dataset.page === currentPage));
  pageTitle.textContent = pages[currentPage].title;
  quickAction.textContent = pages[currentPage].action;
  content.innerHTML = renderers[currentPage]();
  document.querySelector(".sidebar").classList.remove("open");
  if (pushHash) history.replaceState(null, "", `#${currentPage}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(message) {
  toast.textContent = message; toast.classList.add("show"); setTimeout(()=>toast.classList.remove("show"), 2600);
}

function openModal(type) {
  const titles = { "Nueva cita":"Programar nueva cita", "+ Nuevo paciente":"Alta de paciente", "+ Registrar cobro":"Registrar cobro", "+ Nuevo contacto":"Nuevo contacto comercial", "+ Nueva regla":"Nueva automatización", "Generar informe":"Generar informe de dirección", "Vista paciente":"Compartir vista del portal" };
  const title = titles[quickAction.textContent] || (type === "session" ? "Registrar nueva sesión" : "Programar nueva cita");
  modalContent.innerHTML = `<h2 id="modal-title">${title}</h2><p>Interacción de demostración. Ningún dato real será almacenado.</p><div class="form-grid"><div class="field"><label>Nombre</label><input value="María León"></div><div class="field"><label>Servicio</label><select><option>Fisioterapia</option><option>Suelo pélvico</option><option>Pilates</option></select></div><div class="field"><label>Fecha</label><input type="date" value="2026-11-25"></div><div class="field"><label>Hora</label><input type="time" value="10:00"></div></div><button class="primary-button" id="modal-save">Guardar en la demo</button>`;
  modalBackdrop.hidden = false;
}

function aiAnswer(prompt) {
  const p = prompt.toLowerCase();
  if (p.includes("15") || p.includes("factur")) return `<strong>Plan para crecer un 15%</strong>Con los datos de la demo, el objetivo equivale a <b>5.763 € adicionales al mes</b>.<ul><li>Abrir una clase de Pilates el martes a las 18:00: +680 €/mes.</li><li>Cubrir 11 huecos cancelados con la lista de espera: +528 €/mes.</li><li>Ofrecer funcional a 17 pacientes que reciben el alta: potencial +1.173 €/mes.</li><li>Reactivar 24 pacientes con consentimiento vigente: potencial +1.440 €/mes.</li></ul>El resto exige aumentar ocupación en franjas valle y revisar precios. Recomiendo medir cada acción durante 4 semanas.`;
  if (p.includes("margen") || p.includes("rentab")) return `<strong>Rentabilidad de noviembre</strong>Fisioterapia deportiva lidera con un margen del <b>43%</b>, seguida de suelo pélvico (39%) y Pilates terapéutico (34%). La oportunidad más clara es elevar la ocupación de entrenamiento funcional del 76% al 85%.`;
  if (p.includes("reactiv") || p.includes("paciente")) return `<strong>Oportunidades de reactivación</strong>He identificado <b>24 perfiles ficticios</b> con más de 60 días sin cita. Seis presentan alta afinidad y consentimiento comercial vigente. Conviene separar el recordatorio asistencial de cualquier promoción.`;
  return `<strong>Análisis disponible</strong>Puedo relacionar facturación, margen, ocupación, captación y fidelización. Prueba a preguntarme por el crecimiento del 15%, los servicios con más margen o los pacientes que podrían necesitar seguimiento administrativo.`;
}

document.addEventListener("click", e => {
  const nav = e.target.closest("[data-page]"); if (nav) return showPage(nav.dataset.page);
  const go = e.target.closest("[data-go]"); if (go) return showPage(go.dataset.go);
  if (e.target.closest("#mobile-menu")) return document.querySelector(".sidebar").classList.toggle("open");
  const pBtn = e.target.closest("[data-patient]"); if (pBtn) { document.querySelectorAll(".patient-item").forEach(x=>x.classList.remove("active")); pBtn.classList.add("active"); document.getElementById("patient-detail").innerHTML=patientDetail(Number(pBtn.dataset.patient)); return; }
  const toggle=e.target.closest(".toggle"); if(toggle){toggle.classList.toggle("on");showToast(toggle.classList.contains("on")?"Automatización activada":"Automatización pausada");return;}
  const adv=e.target.closest(".advance-lead"); if(adv){adv.closest(".lead").style.opacity=".45";showToast("Oportunidad avanzada a la siguiente fase");return;}
  const prompt=e.target.closest("[data-prompt]"); if(prompt){const chat=document.getElementById("chat-window");const input=document.getElementById("ai-input");input.value=prompt.dataset.prompt;sendAi();return;}
  const portal=e.target.closest("[data-portal]"); if(portal){ const msgs={reserve:"Abriendo agenda disponible…",package:"Bono: 4 sesiones disponibles",exercise:"Programa de ejercicios abierto", "reserve-class":"Plaza reservada · Pilates, martes 18:00",done:"Ejercicio marcado como completado"}; showToast(msgs[portal.dataset.portal]); return; }
  if(e.target.closest("[data-modal]")) return openModal(e.target.closest("[data-modal]").dataset.modal);
  if(e.target.id==="modal-close") modalBackdrop.hidden=true;
  if(e.target.id==="modal-save"){modalBackdrop.hidden=true;showToast("Guardado correctamente en la demo");}
  if(e.target.id==="ai-send") sendAi();
});

function sendAi(){const input=document.getElementById("ai-input");if(!input||!input.value.trim())return;const chat=document.getElementById("chat-window");const text=input.value.trim();chat.querySelector(".chat-input").insertAdjacentHTML("beforebegin",`<div class="message user">${text.replace(/[<>]/g,"")}</div><div class="message ai">${aiAnswer(text)}</div>`);input.value="";chat.querySelector(".chat-input").scrollIntoView({behavior:"smooth"});}

document.addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.id==="ai-input")sendAi();if(e.key==="Escape")modalBackdrop.hidden=true;});
quickAction.addEventListener("click",()=>openModal());
document.getElementById("modal-close").addEventListener("click",()=>modalBackdrop.hidden=true);
window.addEventListener("hashchange",()=>showPage(location.hash.slice(1),false));
showPage(location.hash.slice(1)||"direccion",false);
