const projects = [
  {
    title: 'Rezidence Vinohrady',
    type: 'Byt · Praha 2',
    image: 'public/assets/project-1.svg',
    alt: 'Rezidence Vinohrady',
    text: 'Rekonstrukce městského bytu, kde původní charakter doplňuje současné osvětlení, dubové dřevo a klidná materiálová paleta.'
  },
  {
    title: 'Dům pod lesem',
    type: 'Dům · Říčany',
    image: 'public/assets/project-2.svg',
    alt: 'Dům pod lesem',
    text: 'Rodinný dům navržený kolem přirozeného světla, velkého společného prostoru a materiálů, které dobře stárnou.'
  },
  {
    title: 'Studio Linea',
    type: 'Komerce · Karlín',
    image: 'public/assets/project-3.svg',
    alt: 'Studio Linea',
    text: 'Malé kreativní studio s flexibilními pracovními zónami, výraznou recepcí a akusticky klidným zázemím.'
  },
  {
    title: 'Byt Na Výtoni',
    type: 'Byt · Praha 2',
    image: 'public/assets/project-4.svg',
    alt: 'Byt Na Výtoni',
    text: 'Kompaktní byt, kde vestavěný nábytek a chytré úložné prostory uvolňují maximum obytné plochy.'
  }
];

$(function () {
  $('#year').text(new Date().getFullYear());

  $('.nav-link, .navbar-brand, .hero a[href^="#"], .site-footer a[href^="#"]').on('click', function (event) {
    const target = $(this).attr('href');
    if (target && target.startsWith('#') && $(target).length) {
      event.preventDefault();
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      $('html, body').stop().animate({ scrollTop: $(target).offset().top - 72 }, reduceMotion ? 0 : 450);
    }
  });

  $('.filter-btn').on('click', function () {
    const filter = $(this).data('filter');
    $('.filter-btn').removeClass('active').attr('aria-pressed', 'false');
    $(this).addClass('active').attr('aria-pressed', 'true');

    $('.project-item').each(function () {
      const matches = filter === 'all' || $(this).data('category') === filter;
      $(this).toggleClass('is-hidden', !matches);
    });
  });

  $('.project-card').on('click', function () {
    const project = projects[Number($(this).data('project'))];
    $('#projectModalTitle').text(project.title);
    $('#projectModalType').text(project.type);
    $('#projectModalText').text(project.text);
    $('#projectModalImage').attr({ src: project.image, alt: project.alt });
    bootstrap.Modal.getOrCreateInstance(document.getElementById('projectModal')).show();
  });

  $('.faq-question').on('click', function () {
    const $button = $(this);
    const $answer = $button.next('.faq-answer');
    const isOpen = $button.attr('aria-expanded') === 'true';

    $('.faq-question').attr('aria-expanded', 'false').find('span:last-child').text('+');
    $('.faq-answer').prop('hidden', true);

    if (!isOpen) {
      $button.attr('aria-expanded', 'true').find('span:last-child').text('−');
      $answer.prop('hidden', false);
    }
  });

  $('#contactForm').on('submit', function (event) {
    event.preventDefault();
    const form = this;
    if (!form.checkValidity()) {
      event.stopPropagation();
      $(form).addClass('was-validated');
      $('#formStatus').text('Zkontrolujte prosím zvýrazněná pole.');
      return;
    }

    $(form).addClass('was-validated');
    $('#formStatus').text('Děkujeme. Ukázkový formulář byl úspěšně ověřen.');
    form.reset();
    $(form).removeClass('was-validated');
  });
});
