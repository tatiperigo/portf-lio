document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todas as colunas que têm o efeito ao passar o mouse
    const hoverColumns = document.querySelectorAll('.effect-on-hover');

    hoverColumns.forEach(column => {
        column.addEventListener('mouseover', () => {
            column.style.transform = 'translateY(-10px) scale(1.05)';
        });

        column.addEventListener('mouseout', () => {
            column.style.transform = 'translateY(0) scale(1)';
        });
    });
});

