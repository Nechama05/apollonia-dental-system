// פונקציה למעבר בין לשוניות (טאבים)
function showTab(tabId) {
    // הסתרת כל התוכן
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    
    // הצגת הטאב שנבחר
    document.getElementById(tabId).classList.add('active');
    
    // עדכון הכפתור הפעיל
    // (טריק קטן למצוא את הכפתור שלחץ על הפונקציה הזו נעשה בהמשך בצורה מסודרת יותר, כרגע זה יעבוד בסיסי)
    const btn = document.querySelector(`button[onclick="showTab('${tabId}')"]`);
    if(btn) btn.classList.add('active');
}