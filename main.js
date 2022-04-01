
           let linksSocialMedia = {
            github: "leandrocosta-dev",
            instagram: "ncosta_leandro",
            facebook: "leandro.nascimento.1829",
            youtube: "UCJJMDZ1T3II7XrYieBExeoA"
             };
 
           function changeLinks() {
               for (let li of sociais.children) {
                const social = li.getAttribute('class')

              li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}/`


                //alert(li.children[0].href);
               
               }

             }


           changeLinks()



           function getInfoGithub() {
                const url = `https://api.github.com/users/${linksSocialMedia.github}`
                //alert(url)

                fetch (url)
                .then(response => response.json ())
                .then(data => {
                    userName.textContent = data.name
                    bioUser.textContent = data.bio
                    userLink.href = data.html_url
                   // UserImage.src = data.avatar_url
                   //userLogin.textContent = data.login


                })



           }

           getInfoGithub()

        