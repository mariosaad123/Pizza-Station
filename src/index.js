import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import './css/style2.css';



// التحقق من البيانات المدخله في صفحة تواصل معنا
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("يرجى ملء جميع الحقول.");
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("يرجى إدخال بريد إلكتروني صحيح.");
        return false;
    }

    alert("تم إرسال الرسالة بنجاح!");
    return true;
};


// عرض الشرائح في صفحة بيتزا
$(document).ready(function() {
    let currentIndex = 0;
    const items = $('.carousel-item');
    const itemCount = items.length;

    function showNextSlide() {
        items.eq(currentIndex).removeClass('active');
        currentIndex = (currentIndex + 1) % itemCount;
        items.eq(currentIndex).addClass('active');
    }

    setInterval(showNextSlide, 3000); // تغيير الشرائح كل 3 ثوانٍ

    // أضف إلى السلة
    $(".order-now").on("click", function() {
        alert("تم إضافة المنتج إلى السلة!");
    });
});



// إضافة السنة لجميع الحقوق محفوظة
document.getElementById("year").textContent = new Date().getFullYear();

  