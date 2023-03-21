// 이미지 API URL
const apiUrl = "https://api.thecatapi.com/v1/images/search?limit=10";

// 이미지 데이터를 가져와서 갤러리에 추가하는 함수
async function loadImages() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const gallery = document.querySelector(".gallery");
    data.forEach((cat) => {
      const img = document.createElement("img");
      img.src = cat.url;
      img.alt = "고양이 사진";
      gallery.appendChild(img);
    });
  } catch (error) {
    console.log(error);
  }
}

// 페이지 로드가 완료되면 이미지를 로드합니다.
window.addEventListener("load", loadImages);
