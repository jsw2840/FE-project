//스크롤시 헤더네비 고정
window.addEventListener('scroll', () => {
    const headerNav = document.getElementById('fixed');
    if (window.scrollY > 100) {
        headerNav.classList.add('fixed-header-nav');
    } else {
        headerNav.classList.remove('fixed-header-nav');
    }
});

//이메일 유효성 검사
document.getElementById('email-form').addEventListener('submit', (event) => {
    const input = document.getElementById('email-ad');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    const valid = emailRegex.test(input.value);

    if (!valid) {
        event.preventDefault();
        alert('이메일 주소가 유효하지 않습니다. 다시 확인해주세요.');
    } else {
        event.preventDefault();
        showModal();
    }
});

// 스크롤하면 arrowup보이고 맨위에 도착했을때는 arrowup삭제
document.querySelector('.arrow-up').style.display = 'none';

addEventListener('scroll', () => {
    if (scrollY > 0) {
        document.querySelector('.arrow-up').style.display = 'flex';
    } else {
        document.querySelector('.arrow-up').style.display = 'none';
    }
});


//  arrowup 버튼 누르면 맨위로
document.getElementById('header-nav').addEventListener('click', () => {
    scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// subscribe 누르면 모달 열림
function showModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'flex';
    modal.classList.add('on');
}


// 닫기 버튼 눌렀을때 모달 닫힘
document.getElementById('close-modal').addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
    modal.classList.remove('on');
});

//카카오 지도 api
const container = document.getElementById('map');
const options = {
    center: new kakao.maps.LatLng(33.4423552138731, 126.5715765953064),
    level: 3
};

const map = new kakao.maps.Map(container, options);


const marker = new kakao.maps.Marker({

    position: map.getCenter()
});

marker.setMap(map);