// اختيار شاشة العرض
const result = document.getElementById("result");

// إضافة رقم أو عملية
function appendValue(value) {
    result.value += value;
}

// مسح الشاشة
function clearResult() {
    result.value = "";
}

// حذف آخر عنصر
function deleteLast() {
    result.value = result.value.slice(0, -1);
}

// حساب النتيجة
function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        alert("Invalid Operation");
    }
}