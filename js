document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.faq-q').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var answer = btn.nextElementSibling;
      if(answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        document.querySelectorAll('.faq-a').forEach(function(a){ a.style.display="none"; });
        answer.style.display = "block";
      }
    });
  });
  var navLinks = document.querySelectorAll('.sticky-nav a');
  window.addEventListener('scroll', function() {
    var scrollPos = window.scrollY || window.pageYOffset;
    var sections = ['hero','info','form','faq','lokasi'];
    var found = false;
    for(var i=sections.length-1;i>=0;i--) {
      var section = document.getElementById(sections[i]);
      if(section && section.offsetTop-80 <= scrollPos) {
        navLinks.forEach(function(a){a.classList.remove('active');});
        navLinks[i].classList.add('active');
        found = true;
        break;
      }
    }
    if(!found) navLinks.forEach(function(a){a.classList.remove('active');});
  });
  var form = document.getElementById('arraziForm');
  if(form){
    form.addEventListener('submit', function(e){
      var msg = document.getElementById('formMsg');
      msg.style.display = 'none';
      msg.className = 'form-msg';
      var wa = document.getElementById('whatsapp').value.trim();
      if(!/^(\+62|62|08)[0-9]{8,15}$/.test(wa)) {
        e.preventDefault();
        msg.textContent = 'Format nomor WhatsApp/HP tidak valid!';
        msg.classList.add('error');
        msg.style.display = 'block';
        return false;
      }
      e.preventDefault();
      msg.textContent = "Pesan Anda berhasil dikirim! Kami akan membalas via WhatsApp/email.";
      msg.classList.add('success');
      msg.style.display = 'block';
      form.reset();
      setTimeout(function(){ msg.style.display = 'none'; }, 5000);
    });
  }
});
