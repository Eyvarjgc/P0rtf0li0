import data from '../data/languague.json'

const button = document.querySelector('.changeLanguague')

const myName = document.querySelector('#myName')
const about = document.querySelector('#about')

// EXPERIENCE
const experience = document.querySelector('#Experience')
const ExperienceT = document.querySelector('#ExperienceT')

const webstack = document.querySelector('#webstack')
const pcDesc = document.querySelector('#pcDesc')

// PROJECTS
const Projects = document.querySelector('#Projects')
const projectHelp = document.querySelector('#projectHelp')
const psDesc = document.querySelector('#psDesc')
const mlDesc = document.querySelector('#mlDesc')

// STACK
const stack = document.querySelector('#Stack')
const stackT = document.querySelector('#StackT')
const learning = document.querySelector('#learning')
const tools = document.querySelector('#tools')

// CONTACT
const contact = document.querySelector('#contact')
const contactT = document.querySelector('#contactT')

// NAVBAR
const languageNB = document.querySelector('#languageNB')
const AboutmeNB = document.querySelector('#AboutmeNB')
const ExperienceNB = document.querySelector('#ExperienceNB')
const ProjectsNB = document.querySelector('#ProjectsNB')
const StackNB = document.querySelector('#StackNB')
const ContactNB = document.querySelector('#ContactNB')




function changeLanguague(lang){
	location.hash = lang


	// location.reload()
	updateContent()
}

button.addEventListener('click', () => {
	if(myName.classList.contains('es'))
	{
		myName.classList.remove('es') 
		myName.classList.add('eng')
		changeLanguague('eng')
		

	}

	else if(myName.classList.contains('eng'))
		{
		changeLanguague('es')
		myName.classList.remove('eng') 
		myName.classList.add('es') 
	}
	console.log(myName.classList.contains('myName'));
	

	
})

function updateContent(){
	if(window.location.hash == '#es' ){
		myName.previousElementSibling.textContent = data.es.hero.name
		myName.textContent = data.es.hero.proffesion
		myName.nextElementSibling.textContent = data.es.hero.subtitle

		about.previousElementSibling.textContent = data.es.about.title
		about.textContent = data.es.about.Iam
		about.nextElementSibling.textContent = data.es.about.description

		experience.textContent = 'Experiencia'
		ExperienceT.textContent = 'Experiencia'
		webstack.textContent = 'Tecnologias'
		pcDesc.textContent = data.es	.experience.pcDesc

		Projects.textContent = 'Proyectos'
		projectHelp.previousElementSibling.textContent = 'Proyectos'
		projectHelp.textContent = 'Cursor sobre la imagen para saber mas informacion'
		psDesc.textContent = data.es.projects.psDesc
		mlDesc.textContent = data.es.projects.mlDesc

		stack.textContent = 'Tecnologias'
		stackT.textContent = 'Tecnologias'
		learning.textContent = 'Aprendiendo'
		tools.textContent = 'Herramientas'

		contact.textContent = 'Contacto'
		contactT.textContent = 'Contactame'

		languageNB.textContent = 'Idioma'
		AboutmeNB.textContent = 'Sobre mi'
		ExperienceNB.textContent = 'Experiencia'
		ProjectsNB.textContent = 'Proyectos'
		StackNB.textContent = 'Tecnologias'
		ContactNB.textContent = 'Contacto'



	}
	if(window.location.hash == '#eng' ){
		myName.previousElementSibling.textContent = data.eng.hero.name
		myName.textContent = data.eng.hero.proffesion
		myName.nextElementSibling.textContent = data.eng.hero.subtitle
		
		about.previousElementSibling.textContent = data.eng.about.title
		about.textContent = data.eng.about.Iam
		about.nextElementSibling.textContent = data.eng.about.description

		experience.textContent = 'Experience'
		ExperienceT.textContent = 'Experience'

		webstack.textContent = 'Web stack'
		pcDesc.textContent = data.eng.experience.pcDesc

		Projects.textContent = 'Projects'
		projectHelp.previousElementSibling.textContent = 'Projects'
		projectHelp.textContent = 'Cursor over the image to know more details'
		psDesc.textContent = data.eng.projects.psDesc
		mlDesc.textContent = data.eng.projects.mlDesc

		stack.textContent = 'Stack'
		stackT.textContent = 'Stack'
		
		learning.textContent = 'Learning'
		tools.textContent = 'Tools'

		contact.textContent = 'Contact'
		contactT.textContent = 'Contact me'

		languageNB.textContent = 'language'
		AboutmeNB.textContent = 'About me'
		ExperienceNB.textContent = 'Experience'
		ProjectsNB.textContent = 'Projects'
		StackNB.textContent = 'Stack'
		ContactNB.textContent = 'Contact'
	}

}

window.addEventListener('load', updateContent())

window.addEventListener('hashchange', updateContent())