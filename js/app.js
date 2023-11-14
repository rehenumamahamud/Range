let input = document.querySelector('input')

input.addEventListener('input',function()
{
   document.querySelector('h2').innerText = input.value
}
);