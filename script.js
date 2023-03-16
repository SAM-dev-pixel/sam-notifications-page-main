// mendapatkan data json
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    let notif = "";
    data.forEach((el) => {
      notif += createNotif(el);
    });
    document.querySelector(".notif-body-container").innerHTML = notif;

    deleteEmptyElement();

    checkNotifReaded();
  });
// fungsi untuk membuat elemen notif
function createNotif(data) {
  return `
  <!-- start notif wrapper -->
          <div class="notif-wrapper" data-readed="${data.readed}">
            <img
              src="assets/images/${data.avatar}"
              alt=""
              class="notif-avatar"
            />
            <div class="notif-info-wrapper">
              <div class="notif-info-wrapper-child">
                <a href="#" class="subject-name">${data.subject}</a>
                <span class="predicate-txt">${data.predicate}</span>
                <a href="#" class="object-link">${data.object.link}</a>
              </div>
              <p class="notif-time">${data.time} ago</p>
              <a href="#" class="private-message"
                >${data.object.pmessage}</a
              >
            </div>
            <a href="#" class="object-img">
              <img
                src="assets/images/${data.object.img}"
                alt=""
              />
            </a>
          </div>
          <!-- end notif wrapper -->
  `;
}
function deleteEmptyElement() {
  const notifWrapper = document.querySelectorAll(".notif-wrapper");
  const objectLinks = document.querySelectorAll(".object-link");
  const privateMessage = document.querySelectorAll(".private-message");
  const objectImg = document.querySelectorAll(".object-img");

  objectLinks.forEach((link) => {
    if (link.textContent == "null") link.style.display = "none";
  });
  privateMessage.forEach((pm) => {
    if (pm.textContent == "null") pm.style.display = "none";
  });
  objectImg.forEach((img) => {
    if (img.children[0].src.indexOf("null") !== -1) img.style.display = "none";
  });
}

const markReadBtn = document.querySelector(".mark-read-btn");
markReadBtn.addEventListener("click", () => {
  const notifWrapper = document.querySelectorAll(".notif-wrapper");
  notifWrapper.forEach((notif) => (notif.dataset.readed = true));
  document.querySelector(".notif-amount").textContent = 0;
});
