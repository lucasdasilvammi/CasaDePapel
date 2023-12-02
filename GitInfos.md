Setup d'un fichier
git commit "first commmit"
git branch -M main
git remote add origin https://github.com/lucasdasilvammi/CasaDePapel.git
git push -u origin main


    git status
    git fetch ( pour savoir si qqn d'autre a fait des modifs )

    git pull


<!-- Si c'est quelqu'un d'autre qui a créée le fichier -->
<!-- Aller dans un endroit vide -->
    git clone https://github.com/lucasdasilvammi/CasaDePapel.git
<!-- Après avoir créée le fichier, aller dedans -->
    cd CasaDePapel
<!-- Pour add des mofifications : -->
<!-- tout select -->
    git add -A
    git status

    git pull

    git commit -m "Mon message"
    git status

    git push


@layer base {
    ::-webkit-scrollbar { 
        width: 8px; 
      } 

      /* Track */
      ::-webkit-scrollbar-track { 
        background: #181818;
      } 

      /* Handle */
      ::-webkit-scrollbar-thumb { 
        background: #BD302D; 
        border-radius: 6px;
        box-shadow: inset 4px 0px 50px 10px rgba(0,0,0,0.1);
      }
  }