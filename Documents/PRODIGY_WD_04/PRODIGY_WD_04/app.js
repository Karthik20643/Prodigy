document.addEventListener('DOMContentLoaded', function() {
  // Resume button
  const resumeBtn = document.querySelector('.custom-btn[download]');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      window.open('https://drive.google.com/file/d/1hDpObXCUtYVDlZjThsj-QKY6QlZAAcHS/view?usp=drive_link', '_blank');
    });
  }

  // Github button
  const githubBtn = document.querySelector('.custom-btn[target="_blank"]');
  if (githubBtn) {
    githubBtn.setAttribute('href', 'https://github.com/Karthik20643');
  }
});