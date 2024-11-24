document.addEventListener('DOMContentLoaded', () => {
    //Botones
    const aboutMeButton = document.getElementById('aboutMeButton')
    const studiesButton = document.getElementById('studiesButton')
    const experienceButton = document.getElementById('experienceButton')
    const projectButton = document.getElementById('projectButton')
    const languageButton = document.getElementById('languageButton')
    const skillsButton = document.getElementById('skillsButton')

    //Productos
    const aboutMeProduct = document.getElementById('aboutMeProduct')
    const studiesProduct = document.getElementById('studiesProduct')
    const experienceProduct = document.getElementById('experienceProduct')
    const projectsProduct = document.getElementById('projectProduct')
    const languageProduct = document.getElementById('languageProduct')
    const skillsProduct = document.getElementById('skillsProduct')

    //Textos vidrio
    const aboutMe = document.getElementById('aboutMe')
    const myStudies = document.getElementById('myStudies')
    const experience = document.getElementById('experience')
    const projects = document.getElementById('projects')
    const languages = document.getElementById('languages')
    const skills = document.getElementById('skills')

    //Articles
    const aboutMeArticle = document.getElementById('aboutMeArticle')
    const studiesArticle = document.getElementById('studiesArticle')
    const experienceArticle = document.getElementById('experienceArticle')
    const projectsArticle = document.getElementById('projectsArticle')
    const languagesArticle = document.getElementById('languagesArticle')
    const skillsArticle = document.getElementById('skillsArticle')

    //Botones de cerrar articles
    const closeAboutMe = document.getElementById('closeAboutMe')
    const closeStudies = document.getElementById('closeStudies')
    const closeExperience = document.getElementById('closeExperience')
    const closeProjects = document.getElementById('closeProjects')
    const closeLanguages = document.getElementById('closeLanguages')
    const closeSkills = document.getElementById('closeSkills')

    //Funcionalidad
    //AboutMe
    if(aboutMeButton){
        aboutMeButton.addEventListener('click', () => {
            aboutMeEffect()
            aboutMeProduct.style.animation = 'buyAboutMeProduct 6s ease forwards'
            aboutMe.style.backgroundColor = '#eeff00'
            aboutMe.style.boxShadow = '0px 0px 30px 1px #eeff00'
            aboutMeArticle.style.display = 'flex'
            aboutMeArticle.style.animation = 'fadeInArticle 7s ease forwards'
        })
    }
    if(closeAboutMe){
        closeAboutMe.addEventListener('click', () => {
            aboutMe.style.boxShadow = 'none'
            aboutMe.style.backgroundColor = 'transparent'
            aboutMeProduct.style.animation = 'none'
            aboutMeProduct.style.transform = 'translateX(30px) translateY(60px) translateZ(-40px)'
            aboutMeArticle.style.display = 'none'
        })
    }
    
    //Studies
    if(studiesButton){
        studiesButton.addEventListener('click', () => {
            studiesEffect()
            studiesProduct.style.animation = 'buyStudiesProduct 6s ease forwards'
            myStudies.style.backgroundColor = '#eeff00'
            myStudies.style.boxShadow = '0px 0px 30px 1px #eeff00'
            studiesArticle.style.display = 'flex'
            studiesArticle.style.animation = 'fadeInArticle 7s ease forwards'
        })
    }
    if(closeStudies){
        closeStudies.addEventListener('click', () => {
            myStudies.style.boxShadow = 'none'
            myStudies.style.backgroundColor = 'transparent'
            studiesProduct.style.animation = 'none'
            studiesProduct.style.transform = 'translateX(120px) translateY(-80px) translateZ(-40px)'
            studiesArticle.style.display = 'none'
        })
    }

    //Experience
    if(experienceButton){
        experienceButton.addEventListener('click', () => {
            experienceEffect()
            experienceProduct.style.animation = 'buyExperienceProduct 6s ease forwards'
            experience.style.backgroundColor = '#eeff00'
            experience.style.boxShadow = '0px 0px 30px 1px #eeff00'
            experienceArticle.style.display = 'flex'
            experienceArticle.style.animation = 'fadeInArticle 7s ease forwards'
        })
    }
    if(closeExperience){
        closeExperience.addEventListener('click', () => {
            experience.style.boxShadow = 'none'
            experience.style.backgroundColor = 'transparent'
            experienceProduct.style.animation = 'none'
            experienceProduct.style.transform = 'translateX(210px) translateY(-10px) translateZ(-40px)'
            experienceArticle.style.display = 'none'
        })
    }
   
    //Projects
    if(projectButton){
        projectButton.addEventListener('click', () => {
            projectEffect()
            projectsProduct.style.animation = 'buyProjectProduct 6s ease forwards'
            projects.style.backgroundColor = '#eeff00'
            projects.style.boxShadow = '0px 0px 30px 1px #eeff00'
            projectsArticle.style.animation = 'fadeInArticle 7s ease forwards'
            projectsArticle.style.display = 'flex'
        })
    }
    if(closeProjects){
        closeProjects.addEventListener('click', () => {
            projects.style.boxShadow = 'none'
            projects.style.backgroundColor = 'transparent'
            projectsProduct.style.animation = 'none'
            projectsProduct.style.transform = 'translateX(30px) translateY(-62px) translateZ(-40px)'
            projectsArticle.style.display = 'none'
        })
    }
    
    //Languages
    if(languageButton){
        languageButton.addEventListener('click', () => {
            languageEffect()
            languageProduct.style.animation = 'buyLanguageProduct 6s ease forwards'
            languages.style.backgroundColor = '#eeff00'
            languages.style.boxShadow = '0px 0px 30px 1px #eeff00'
            languagesArticle.style.display = 'flex'
            languagesArticle.style.animation = 'fadeInArticle 7s ease forwards'
        })
    }
    if(closeLanguages){
        closeLanguages.addEventListener('click', () => {
            languages.style.boxShadow = 'none'
            languages.style.backgroundColor = 'transparent'
            languageProduct.style.animation = 'none'
            languageProduct.style.transform = 'translateX(120px) translateY(-131px) translateZ(-40px)'
            languagesArticle.style.display = 'none'
        })
    }
    
    //Skills
    if(skillsButton){
        skillsButton.addEventListener('click', () => {
            skillsEffect()
            skillsProduct.style.animation = 'buySkillsProduct 6s ease forwards'
            skills.style.backgroundColor = '#eeff00'
            skills.style.boxShadow = '0px 0px 30px 1px #eeff00'
            skillsArticle.style.display = 'flex'
            skillsArticle.style.animation = 'fadeInArticle 7s ease forwards'
        })
    }
    if(closeSkills){
        closeSkills.addEventListener('click', () => {
            skills.style.boxShadow = 'none'
            skills.style.backgroundColor = 'transparent'
            skillsProduct.style.animation = 'none'
            skillsProduct.style.transform = 'translateX(210px) translateY(-201px) translateZ(-40px)'
            skillsArticle.style.display = 'none'
        })
    }

    //Sound effects
    const aboutMeEffectSound = document.getElementById('aboutMeEffectSound')
    const studiesEffectSound = document.getElementById('studiesEffectSound')
    const experienceEffectSound = document.getElementById('experienceEffectSound')
    const projectEffectSound = document.getElementById('projectEffectSound')
    const languageEffectSound = document.getElementById('languageEffectSound')
    const skillsEffectSound = document.getElementById('skillsEffectSound')

    //Efecto de sonido
    function aboutMeEffect(){if(aboutMeEffectSound){aboutMeEffectSound.volume = 0.7;aboutMeEffectSound.play()}}
    function studiesEffect(){if(studiesEffectSound){studiesEffectSound.volume = 0.7;studiesEffectSound.play()}}  
    function experienceEffect(){if(aboutMeEffectSound){experienceEffectSound.volume = 0.7;experienceEffectSound.play()}}  
    function projectEffect(){if(aboutMeEffectSound){projectEffectSound.volume = 0.7;projectEffectSound.play()}}  
    function languageEffect(){if(aboutMeEffectSound){languageEffectSound.volume = 0.7; languageEffectSound.play()}}  
    function skillsEffect(){if(skillsEffectSound){skillsEffectSound.volume = 0.7; skillsEffectSound.play()}}

    //Funcionalidad de musica de fondo
    const playButton = document.getElementById('playButton')
    const pauseButton = document.getElementById('pauseButton')
    const backgroundMusic = document.getElementById('backgroundMusic')
    const inputVolumeControl = document.getElementById('volumeControl')

    //Play
    playButton.addEventListener('click', () => {backgroundMusic.play()})
    //Pause
    pauseButton.addEventListener('click', () => {backgroundMusic.pause()})
    //Volume control
    inputVolumeControl.addEventListener('input', () => {backgroundMusic.volume = inputVolumeControl.value;})
})
