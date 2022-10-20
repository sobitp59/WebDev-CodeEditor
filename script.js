let codeEditorTabs = document.querySelectorAll('.codeEditor__tabs');
let codeTextareas = document.querySelectorAll('.codeEditor__textareas');
let runBtn = document.getElementById('run-btn');



// code for toggling between languages
codeEditorTabs.forEach((tab, index)=>{
    tab.addEventListener('click', ()=>{

        codeTextareas.forEach(textarea => {
            textarea.classList.remove('is-active')
        })
        
        codeEditorTabs.forEach(tab => {
            tab.classList.remove('is-active')
        })

        codeTextareas[index].classList.add('is-active')
        codeEditorTabs[index].classList.add('is-active')

    })
})




// code for codes
const html = CodeMirror.fromTextArea(document.getElementById('language-html'),{
    mode : 'html'
})

const css = CodeMirror.fromTextArea(document.getElementById('language-css'),{
    mode : 'css',
})


const javascript = CodeMirror.fromTextArea(document.getElementById('language-javascript'),{
    mode : 'js',
})

runBtn.addEventListener('click', ()=>{
    console.log(html, css, javascript)
})