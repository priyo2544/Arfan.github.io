const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('click', () => {
        // যেকোনো অন্যান্য "active" ক্লাস থাকা কার্ড থেকে ক্লাস রিমুভ করুন
        skillCards.forEach(item => item.classList.remove('active'));
        
        // যেই কার্ডে ক্লিক করা হয়েছে তার উপর active ক্লাস অ্যাড করুন
        card.classList.add('active');
    });
});
