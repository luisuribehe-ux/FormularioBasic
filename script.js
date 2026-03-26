/* ================================================
   LuisconIA Lead Capture — Script
   ================================================ */

// ---- Google Apps Script URL ----
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyUbRFf202QrsFoFawjeOQNn28RC0lqiKOhyj3YDkxIegka7-CyjdgVzy1AbZ5d_U_6/exec';

// ---- Translations ----
const translations = {
  es: {
    'page-title': 'Newsletter de IA - LuisconIA',
    'badge': 'Recurso gratuito',
    'hero-title-1': 'Mantente a la vanguardia',
    'hero-title-2': 'de la Inteligencia Artificial',
    'hero-subtitle': 'Recibe las noticias, herramientas y estrategias de IA que están transformando negocios.',
    'form-title': 'Suscríbete al Newsletter',
    'form-subtitle': 'Elige tu plan y comienza a recibir insights de IA.',
    'label-nombre': 'Nombre',
    'label-correo': 'Correo electrónico',
    'label-telefono': 'Teléfono',
    'label-cargo': 'Cargo',
    'label-empresa': 'Empresa',
    'label-rubro': 'Rubro',
    'label-categorias': '¿Qué temas te interesan?',
    'hint-categorias': 'Selecciona hasta 5 temas',
    'cat-ia-general': 'IA General & Tendencias',
    'cat-herramientas': 'Herramientas & Productos de IA',
    'cat-claude': 'Claude Code & Agentes IA',
    'cat-negocios': 'IA para Negocios',
    'cat-regulacion': 'Regulación & Leyes de IA',
    'cat-global': 'IA Global: Avances por País',
    'cat-productividad': 'Productividad con IA',
    'cat-liderazgo': 'IA & Liderazgo',
    'cat-automatizacion': 'Automatización & No-Code',
    'cat-prompting': 'Prompting & Casos de Uso',
    'val-categorias': 'Selecciona al menos un tema',
    'val-categorias-max': 'Máximo 5 temas',
    'label-suscripcion': 'Elige tu suscripción',
    'opt-general-title': 'Newsletter General',
    'opt-general-desc': 'Updates diarios de Claude Code y herramientas de IA. Gratis por 1 semana.',
    'opt-general-tag': 'Gratis 7 días',
    'opt-personal-title': 'Newsletter Personalizado + Guías',
    'opt-personal-desc': 'Insights de IA enfocados en tu negocio con acciones diarias aplicables. Gratis por 3 días.',
    'opt-personal-tag': 'Gratis 3 días',
    'opt-personal-inc-1': 'Noticias diarias enfocadas en tu negocio y rubro',
    'opt-personal-inc-2': 'Insights accionables para aplicar cada día',
    'opt-personal-inc-3': 'Guías prácticas semanales sobre herramientas de IA',
    'profile-title': 'Cuéntanos sobre ti',
    'profile-entrepreneur': 'Mi propio negocio',
    'profile-entrepreneur-desc': 'Emprendedor, consultor, freelance o dueño de empresa',
    'profile-corporate': 'Trabajo en una empresa',
    'profile-corporate-desc': 'Profesional, líder de equipo o ejecutivo en una organización',
    'val-perfil': 'Selecciona tu perfil',
    // Entrepreneur fields
    'label-desc-negocio': 'Descripción del negocio',
    'label-servicios': 'Servicios o Productos',
    'label-dolores': 'Oportunidades o Dolores hoy',
    'label-publico': 'Público objetivo',
    'label-herramientas': 'Herramientas de IA que usas',
    // Corporate fields
    'label-area': 'Área o departamento',
    'label-desafios': 'Principales desafíos en tu día a día',
    'label-uso-ia': '¿Cómo usas IA hoy en tu trabajo?',
    'label-herramientas-corp': 'Herramientas de IA que usas o conoces',
    'label-objetivo': '¿Qué quieres lograr con IA en tu rol?',
    'submit-btn': 'Suscribirme',
    'disclaimer': 'Sin spam. Solo contenido de valor. Cancela cuando quieras.',
    'success-title': '¡Registro exitoso!',
    'success-msg': 'Te hemos registrado correctamente. Pronto recibirás tu primer newsletter.',
    'success-reset': 'Registrar otro',
    // Placeholders
    'ph-nombre': 'Tu nombre completo',
    'ph-correo': 'tu@email.com',
    'ph-telefono': '+51 999 999 999',
    'ph-cargo': 'CEO, CTO, Gerente...',
    'ph-empresa': 'Nombre de tu empresa',
    'ph-rubro': 'Tecnología, Consultoría, Retail...',
    'ph-desc-negocio': '¿A qué se dedica tu empresa? Describe brevemente tu modelo de negocio.',
    'ph-servicios': '¿Qué productos o servicios ofreces?',
    'ph-dolores': '¿Cuáles son tus principales retos o áreas de oportunidad?',
    'ph-publico': '¿Quiénes son tus clientes ideales? Describe tu público objetivo.',
    'ph-herramientas': '¿Qué herramientas de IA usas actualmente? (ChatGPT, Claude, Copilot, etc.)',
    'ph-area': 'Marketing, Ventas, Operaciones, Tecnología, RRHH...',
    'ph-desafios': 'Ej: Tareas operativas repetitivas, exceso de reuniones, reportes manuales, coordinación entre equipos...',
    'ph-uso-ia': 'Ej: Para redactar emails, analizar datos, generar presentaciones, aún no la uso...',
    'ph-herramientas-corp': 'ChatGPT, Claude, Copilot, Gemini, Midjourney, ninguna...',
    'ph-objetivo': 'Ej: Automatizar tareas, ser más productivo, mejorar análisis de datos, aprender nuevas habilidades...',
    // Validation
    'val-required': 'Este campo es obligatorio',
    'val-email': 'Ingresa un correo válido',
    'val-suscripcion': 'Selecciona una opción',
    'val-phone': 'Ingresa un teléfono válido',
  },
  en: {
    'page-title': 'AI Newsletter - LuisconIA',
    'badge': 'Free resource',
    'hero-title-1': 'Stay ahead in',
    'hero-title-2': 'Artificial Intelligence',
    'hero-subtitle': 'Get the AI news, tools, and strategies that are transforming businesses.',
    'form-title': 'Subscribe to the Newsletter',
    'form-subtitle': 'Choose your plan and start receiving AI insights.',
    'label-nombre': 'Name',
    'label-correo': 'Email',
    'label-telefono': 'Phone',
    'label-cargo': 'Job Title',
    'label-empresa': 'Company',
    'label-rubro': 'Industry',
    'label-categorias': 'What topics interest you?',
    'hint-categorias': 'Select up to 5 topics',
    'cat-ia-general': 'General AI & Trends',
    'cat-herramientas': 'AI Tools & Products',
    'cat-claude': 'Claude Code & AI Agents',
    'cat-negocios': 'AI for Business',
    'cat-regulacion': 'AI Regulation & Law',
    'cat-global': 'Global AI: Advances by Country',
    'cat-productividad': 'AI Productivity',
    'cat-liderazgo': 'AI & Leadership',
    'cat-automatizacion': 'Automation & No-Code',
    'cat-prompting': 'Prompting & Use Cases',
    'val-categorias': 'Select at least one topic',
    'val-categorias-max': 'Maximum 5 topics',
    'label-suscripcion': 'Choose your subscription',
    'opt-general-title': 'General Newsletter',
    'opt-general-desc': 'Daily Claude Code and AI tools updates. Free for 1 week.',
    'opt-general-tag': 'Free 7 days',
    'opt-personal-title': 'Personalized Newsletter + Guides',
    'opt-personal-desc': 'AI insights focused on your business with actionable daily steps. Free for 3 days.',
    'opt-personal-tag': 'Free 3 days',
    'opt-personal-inc-1': 'Daily news tailored to your business and industry',
    'opt-personal-inc-2': 'Actionable insights to apply every day',
    'opt-personal-inc-3': 'Weekly practical guides on AI tools',
    'profile-title': 'Tell us about yourself',
    'profile-entrepreneur': 'My own business',
    'profile-entrepreneur-desc': 'Entrepreneur, consultant, freelancer or business owner',
    'profile-corporate': 'I work at a company',
    'profile-corporate-desc': 'Professional, team lead or executive at an organization',
    'val-perfil': 'Select your profile',
    // Entrepreneur fields
    'label-desc-negocio': 'Business Description',
    'label-servicios': 'Services or Products',
    'label-dolores': 'Opportunities or Pain Points',
    'label-publico': 'Target Audience',
    'label-herramientas': 'AI Tools you use',
    // Corporate fields
    'label-area': 'Department or area',
    'label-desafios': 'Main daily challenges',
    'label-uso-ia': 'How do you use AI today at work?',
    'label-herramientas-corp': 'AI tools you use or know',
    'label-objetivo': 'What do you want to achieve with AI?',
    'submit-btn': 'Subscribe',
    'disclaimer': 'No spam. Only valuable content. Cancel anytime.',
    'success-title': 'Successfully registered!',
    'success-msg': "You've been registered. You'll receive your first newsletter soon.",
    'success-reset': 'Register another',
    // Placeholders
    'ph-nombre': 'Your full name',
    'ph-correo': 'you@email.com',
    'ph-telefono': '+1 555 555 5555',
    'ph-cargo': 'CEO, CTO, Manager...',
    'ph-empresa': 'Company name',
    'ph-rubro': 'Technology, Consulting, Retail...',
    'ph-desc-negocio': 'What does your company do? Briefly describe your business model.',
    'ph-servicios': 'What products or services do you offer?',
    'ph-dolores': 'What are your main challenges or areas of opportunity?',
    'ph-publico': 'Who are your ideal customers? Describe your target audience.',
    'ph-herramientas': 'What AI tools do you currently use? (ChatGPT, Claude, Copilot, etc.)',
    'ph-area': 'Marketing, Sales, Operations, Technology, HR...',
    'ph-desafios': 'E.g.: Repetitive tasks, too many meetings, manual reports, cross-team coordination...',
    'ph-uso-ia': 'E.g.: Writing emails, analyzing data, creating presentations, not using it yet...',
    'ph-herramientas-corp': 'ChatGPT, Claude, Copilot, Gemini, Midjourney, none...',
    'ph-objetivo': 'E.g.: Automate tasks, boost productivity, improve data analysis, learn new skills...',
    // Validation
    'val-required': 'This field is required',
    'val-email': 'Enter a valid email',
    'val-suscripcion': 'Select an option',
    'val-phone': 'Enter a valid phone number',
  }
};

// ---- State ----
let currentLang = 'es';

// ---- Language Toggle ----
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang);

  // Update toggle buttons
  document.getElementById('lang-es').classList.toggle('active', lang === 'es');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');

  // Update all text nodes with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update all placeholders with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update page title
  document.title = translations[lang]['page-title'];

  // Clear validation errors on language switch
  clearErrors();
}

// ---- Conditional Fields Logic ----
function clearProfileFields() {
  // Clear and hide both profile field sets
  ['entrepreneur-fields', 'corporate-fields'].forEach(id => {
    const container = document.getElementById(id);
    container.classList.remove('visible');
    container.querySelectorAll('textarea, input[type="text"]').forEach(f => {
      f.removeAttribute('required');
      f.value = '';
      f.classList.remove('input-error');
      const errorMsg = f.parentElement.querySelector('.error-msg');
      if (errorMsg) errorMsg.textContent = '';
    });
  });
  // Uncheck profile radios
  document.querySelectorAll('input[name="perfil"]').forEach(r => r.checked = false);
}

function showProfileFields(profile) {
  // Hide both first
  ['entrepreneur-fields', 'corporate-fields'].forEach(id => {
    document.getElementById(id).classList.remove('visible');
    document.getElementById(id).querySelectorAll('textarea, input[type="text"]').forEach(f => {
      f.removeAttribute('required');
    });
  });

  // Show the selected one
  const targetId = profile === 'emprendedor' ? 'entrepreneur-fields' : 'corporate-fields';
  const target = document.getElementById(targetId);
  target.classList.add('visible');
  target.querySelectorAll('textarea, input[type="text"]').forEach(f => {
    f.setAttribute('required', '');
  });
}

function initConditionalFields() {
  const suscripcionRadios = document.querySelectorAll('input[name="suscripcion"]');
  const conditionalFields = document.getElementById('conditional-fields');

  suscripcionRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      if (e.target.value === 'personalizado') {
        conditionalFields.classList.add('visible');
      } else {
        conditionalFields.classList.remove('visible');
        clearProfileFields();
      }
    });
  });

  // Profile selection
  document.querySelectorAll('input[name="perfil"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      showProfileFields(e.target.value);
      document.getElementById('perfil-error').textContent = '';
    });
  });
}

// ---- Validation ----
function clearErrors() {
  document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
  document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
}

function showFieldError(fieldId, messageKey) {
  const field = document.getElementById(fieldId);
  if (!field) return;
  field.classList.add('input-error');
  const errorMsg = field.parentElement.querySelector('.error-msg');
  if (errorMsg) {
    errorMsg.textContent = translations[currentLang][messageKey];
  }
}

function validateForm() {
  clearErrors();
  let isValid = true;

  // Required base fields
  const baseFields = ['nombre', 'correo', 'telefono', 'cargo', 'empresa', 'rubro'];
  baseFields.forEach(id => {
    const field = document.getElementById(id);
    if (!field.value.trim()) {
      showFieldError(id, 'val-required');
      isValid = false;
    }
  });

  // Email format
  const correo = document.getElementById('correo');
  if (correo.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim())) {
    showFieldError('correo', 'val-email');
    isValid = false;
  }

  // Phone format (basic: at least 7 digits)
  const telefono = document.getElementById('telefono');
  const phoneDigits = telefono.value.replace(/\D/g, '');
  if (telefono.value.trim() && phoneDigits.length < 7) {
    showFieldError('telefono', 'val-phone');
    isValid = false;
  }

  // Categories (at least 1, max 3)
  const checkedCategories = document.querySelectorAll('input[name="categorias"]:checked');
  if (checkedCategories.length === 0) {
    document.getElementById('categorias-error').textContent = translations[currentLang]['val-categorias'];
    isValid = false;
  } else if (checkedCategories.length > 5) {
    document.getElementById('categorias-error').textContent = translations[currentLang]['val-categorias-max'];
    isValid = false;
  }

  // Subscription selection
  const suscripcion = document.querySelector('input[name="suscripcion"]:checked');
  if (!suscripcion) {
    const errorMsg = document.getElementById('suscripcion-error');
    errorMsg.textContent = translations[currentLang]['val-suscripcion'];
    isValid = false;
  }

  // Conditional fields (if personalizado selected)
  if (suscripcion && suscripcion.value === 'personalizado') {
    // Must select a profile
    const perfil = document.querySelector('input[name="perfil"]:checked');
    if (!perfil) {
      document.getElementById('perfil-error').textContent = translations[currentLang]['val-perfil'];
      isValid = false;
    } else if (perfil.value === 'emprendedor') {
      ['descripcion_negocio', 'servicios_productos', 'oportunidades_dolores', 'publico_objetivo', 'herramientas_ia'].forEach(id => {
        const field = document.getElementById(id);
        if (!field.value.trim()) { showFieldError(id, 'val-required'); isValid = false; }
      });
    } else if (perfil.value === 'corporativo') {
      ['area_departamento', 'desafios_laborales', 'uso_actual_ia', 'herramientas_corp', 'objetivo_ia'].forEach(id => {
        const field = document.getElementById(id);
        if (!field.value.trim()) { showFieldError(id, 'val-required'); isValid = false; }
      });
    }
  }

  return isValid;
}

// ---- Real-time validation ----
function initRealTimeValidation() {
  // Clear error on input for text fields
  document.querySelectorAll('#lead-form input, #lead-form textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.classList.remove('input-error');
      const errorMsg = field.parentElement.querySelector('.error-msg');
      if (errorMsg) errorMsg.textContent = '';
    });
  });

  // Category checkboxes: max 3, clear error on change
  const categoryCheckboxes = document.querySelectorAll('input[name="categorias"]');
  categoryCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const checked = document.querySelectorAll('input[name="categorias"]:checked');
      // Enforce max 3
      if (checked.length > 5) {
        cb.checked = false;
        document.getElementById('categorias-error').textContent = translations[currentLang]['val-categorias-max'];
        return;
      }
      document.getElementById('categorias-error').textContent = '';
    });
  });

  // Clear subscription error on change
  document.querySelectorAll('input[name="suscripcion"]').forEach(radio => {
    radio.addEventListener('change', () => {
      document.getElementById('suscripcion-error').textContent = '';
    });
  });

  // Email live validation (green border)
  const correo = document.getElementById('correo');
  correo.addEventListener('input', () => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim())) {
      correo.classList.add('input-valid');
    } else {
      correo.classList.remove('input-valid');
    }
  });
}

// ---- Form Submission ----
async function handleSubmit(e) {
  e.preventDefault();

  if (!validateForm()) {
    // Scroll to first error
    const firstError = document.querySelector('.input-error');
    if (firstError) {
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }

  const btn = document.getElementById('submit-btn');
  btn.classList.add('loading');
  btn.disabled = true;

  const suscripcion = document.querySelector('input[name="suscripcion"]:checked').value;

  // Collect selected categories
  const selectedCategories = Array.from(document.querySelectorAll('input[name="categorias"]:checked'))
    .map(cb => cb.value).join(', ');

  const perfil = document.querySelector('input[name="perfil"]:checked');
  const perfilValue = perfil ? (perfil.value === 'emprendedor' ? 'Emprendedor' : 'Corporativo') : '';

  const formData = {
    nombre: document.getElementById('nombre').value.trim(),
    correo: document.getElementById('correo').value.trim().toLowerCase(),
    telefono: document.getElementById('telefono').value.trim(),
    cargo: document.getElementById('cargo').value.trim(),
    empresa: document.getElementById('empresa').value.trim(),
    rubro: document.getElementById('rubro').value.trim(),
    categorias: selectedCategories,
    suscripcion: suscripcion === 'personalizado' ? 'Newsletter Personalizado' : 'Newsletter General',
    perfil: perfilValue,
    // Entrepreneur fields
    descripcion_negocio: document.getElementById('descripcion_negocio')?.value.trim() || '',
    servicios_productos: document.getElementById('servicios_productos')?.value.trim() || '',
    oportunidades_dolores: document.getElementById('oportunidades_dolores')?.value.trim() || '',
    publico_objetivo: document.getElementById('publico_objetivo')?.value.trim() || '',
    herramientas_ia: document.getElementById('herramientas_ia')?.value.trim() || '',
    // Corporate fields
    area_departamento: document.getElementById('area_departamento')?.value.trim() || '',
    desafios_laborales: document.getElementById('desafios_laborales')?.value.trim() || '',
    uso_actual_ia: document.getElementById('uso_actual_ia')?.value.trim() || '',
    herramientas_corp: document.getElementById('herramientas_corp')?.value.trim() || '',
    objetivo_ia: document.getElementById('objetivo_ia')?.value.trim() || '',
    idioma: currentLang
  };

  try {
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    // Show success (no-cors returns opaque response, so we trust it worked)
    showSuccess(formData.correo);
  } catch (error) {
    console.error('Submit error:', error);
    alert(currentLang === 'es'
      ? 'Hubo un error al enviar. Por favor intenta de nuevo.'
      : 'There was an error submitting. Please try again.');
  } finally {
    btn.classList.remove('loading');
    btn.disabled = false;
  }
}

function showSuccess(email) {
  document.getElementById('lead-form').style.display = 'none';
  const successState = document.getElementById('success-state');
  successState.classList.remove('hidden');
  document.getElementById('success-email').textContent = email;
}

function resetForm() {
  document.getElementById('lead-form').style.display = 'block';
  document.getElementById('lead-form').reset();
  document.getElementById('success-state').classList.add('hidden');
  document.getElementById('conditional-fields').classList.remove('visible');
  clearProfileFields();
  document.querySelectorAll('input[name="categorias"]').forEach(cb => cb.checked = false);
  clearErrors();
  document.getElementById('correo').classList.remove('input-valid');
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  initConditionalFields();
  initRealTimeValidation();
  document.getElementById('lead-form').addEventListener('submit', handleSubmit);
});
