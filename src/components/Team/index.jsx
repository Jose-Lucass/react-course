'import "./styles.css'
import { Team } from "./src/pattern/composition"

const TeamUsers = [
    {
        image: "https://1.bp.blogspot.com/-9xzGyoTYf2Q/WSFCo5LdzhI/AAAAAAAAILs/8NmAmfgBgw4FFN6VfxKVvfNdnKnV3IbEQCEw/s1600/nintchdbpict000251540925-e1472842592943.jpg",
        name: "Cristiano Ronaldo",
        role: "Jogador de futebol",
        description: "Robozão",
        mediaSocial: {
            linkedin: "https://br.linkedin.com/in/lucascorreaa/",
            x: "https://x.com/",
            dribble: "https://dribbble.com/"    
        } 
    },
    {
        image: "https://th.bing.com/th/id/OIP.oS5xKScP6Z7d-W-uFnQ_qwHaD4?w=1200&h=630&rs=1&pid=ImgDetMain",
        name: "Pelé",
        role: "Jogador de futebol",
        description: "Rei do Futebol",
        mediaSocial: {
            linkedin: "https://br.linkedin.com/in/lucascorreaa/",
            x: "https://x.com/",
            dribble: "https://dribbble.com/"    
        } 
    },
    {
        image: "https://th.bing.com/th/id/OIP.R3MK7CWOg0gBaxfQxGqDmAHaEK?w=768&h=432&rs=1&pid=ImgDetMain",
        name: "Michael Jordan",
        role: "Jogador de basquete",
        description: "G.O.A.T",
        mediaSocial: {
            linkedin: "https://br.linkedin.com/in/lucascorreaa/",
            x: "https://x.com/",
            dribble: "https://dribbble.com/"    
        } 
    },
    {
        image: "https://th.bing.com/th/id/OIP.UrkNY-pf7Egcx_uwzyx__gHaEo?rs=1&pid=ImgDetMain",
        name: "Ronnie Coleman",
        role: "Fisiculturista",
        description: "Light weight baby",
        mediaSocial: {
            linkedin: "https://br.linkedin.com/in/lucascorreaa/",
            x: "https://x.com/",
            dribble: "https://dribbble.com/"    
        } 
    },
    {
        image: "https://th.bing.com/th/id/R.a9ea0e37fcde191557cf87923fc96e98?rik=7QfoaEvoyVGjvw&riu=http%3a%2f%2fs.glbimg.com%2fes%2fge%2ff%2foriginal%2f2016%2f09%2f22%2fayrton_senna.jpg&ehk=QlO4ILZ%2bRvw49b6wGLlXmBsXKd9cimqyCjrSXvGKavM%3d&risl=&pid=ImgRaw&r=0",
        name: "Ayrton Senna",
        role: "Piloto de F1",
        description: "Rei do Asfalto",
        mediaSocial: {
            linkedin: "https://br.linkedin.com/in/lucascorreaa/",
            x: "https://x.com/",
            dribble: "https://dribbble.com/"    
        } 
    },
    {
        image: "https://th.bing.com/th/id/OIP.PcbM_6Bjj1OXklu9sGvOjAHaE7?rs=1&pid=ImgDetMain",
        name: "Tata",
        role: "Mc",
        description: "O tata é foda",
        mediaSocial: {
            linkedin: "https://br.linkedin.com/in/lucascorreaa/",
            x: "https://x.com/",
            dribble: "https://dribbble.com/"    
        } 
    },
   
]

export default function TeamComposition() {
    return (
        <div className="team-container">
        <Team.Section />
        <div className="team-content-wrapper">

            {
            TeamUsers.map((user, key) => {
                return (
                    <Team.Content 
                        key={key}
                        image={user.image}
                        name={user.name}
                        role={user.role}
                        description={user.description}
                        linkedin={user.mediaSocial.linkedin}
                        x={user.mediaSocial.x}
                        dribble={user.mediaSocial.dribble}
                    />
                )
            })
        }
        </div>
        <Team.Main />
        </div>
    )
}