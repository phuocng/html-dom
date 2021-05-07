document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('iframe').forEach(frame => {
        frame.addEventListener('load', () => {
            // Get the height of the content
            const height = frame.contentDocument.body.scrollHeight;
        
            // Set the height of iframe
            frame.setAttribute('height', `${height}px`);
        });
    });
});
