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
            <img
              src="assets/images/${data.avatar}"
              alt=""
              class="notif-avatar"
            />
            <div class="notif-info-wrapper">
              <div class="notif-info-wrapper-child">
                <a href="#" class="subject-name">${data.subject}</a>
                <p class="predicate-txt">${data.predicate}</p>
                <a href="#" class="object-link">${data.object.link}</a>
              </div>
              <p class="notif-time">${data.time}</p>
              <a href="#" class="private-message"
                >${data.object.pmessage}</a
              >
            </div>
            <a href="#" class="object-img">
              <img
                src="assets/images/${data.object.img}
                alt=""
              />
            </a>
          </div>
          <!-- end notif wrapper -->
  `;
}
