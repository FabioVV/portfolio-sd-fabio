import flask from'../projects_images/flask.png'


interface Project {
    name: string
    image: string
    github_repo: string
}


export const Projects:Project[] = [
    {
        name:'Simple blog in flask',
        image:flask,
        github_repo:'https://github.com/FabioVV/FlaskLearning',
    }
]



