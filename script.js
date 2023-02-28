// mendapatkan data json
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    let notif = "";
    data.forEach((el) => {
      notif += createNotif(el);
    });
    document.querySelector(".notif-body-container").innerHTML = notif;
  });

function createNotif(data) {
  return `
  <!-- start notif wrapper -->
  <div class="notif-wrapper">
    <img src="assets/images/${data.avatar}" class="notif-img-profile"/>
    <div class="notif-info-wrapper">
      <p class="notif-profile-wrapper">
        <a href="#" class="profile-link">${data.subject}</a> ${data.predicate} <a href="#" class="object-link">${data.object}</a>
      </p>
      <p class="notif-time">${data.time} ago</p>
    </div>
  </div>
  <!-- end notif wrapper -->
  `;
}
