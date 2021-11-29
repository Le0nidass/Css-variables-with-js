const inputs = document.querySelectorAll('.controls input');

function slideUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', slideUpdate));
inputs.forEach(input => input.addEventListener('mousemove', slideUpdate));