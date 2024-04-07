import SyntaxHighlighter from 'react-syntax-highlighter';

import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const code = `
class MySkills:

      # My Skills are always getting better, and i am always learning new things! <;
        def __init__(self):

                self.name = 'Fábio Varela'
                self.email = 'fabio-varela@protonmail.com'
                self.age = 20

        def return_skills(self):

              # My skills 
                return {
                          'Front - End: ':  [  'ReactJS',   'HTML',   'CSS',   'Bootstrap',   'MaterialU'  ],

                          'Back - End: ':  [  'MySQL',   'SQLServer',   'Flask',   'Ruby on Rails' ,   'Node.js'  ],

                          'Languages: ':  [  'Ruby',   'C#',   'Python',   'Javascript'  ]
                }


my_skills = MySkills()

`


function SyntaxSkills() {
  return (
    <SyntaxHighlighter showLineNumbers="true"  language="python" style={a11yDark}  customStyle={{backgroundColor:'transparent'}} >
        {code}
    </SyntaxHighlighter>
  )
}

export default SyntaxSkills