function lanGuages () {
    for(const country of countries){
      const {languages}  = country
      const langList = languages.map((lang) => lang.name)
      console.log(langList)  
// const langs = []
//               for(const language of country.languages){
//                 langs.push(language.name)
            
//               }

//           //console.log (country.name + ': ' + langs.toString())

//       const langSet= new Set (langs)

//       const counts = []
//       const count = {}

  //   for (const w of langSet ) {
  //     const filteredLang = langs.filter (word => word === w)
 
  //    counts.push ({ word: w,count : filteredLang.length})
  //       //console.log (filteredLang) // lists 368 languages (some still repeat so need to clean it)
     
  //       let newL= filteredLang[0] //this  is string
      
  //      let end = newL.split (' ') // this turns it is array

  //      console.log (end)

 
       

  //   /* filteredLang.sort((a, b) => {
  //     if(a.count > b.count) return -1;
  //     if(a.count < b.count) return 1;
  //     return 0;
  // })*/

// this pushes it to select 
  //       for (i = 0 ; i < filteredLang.length ; i++){ 

  //       let langOpt =document.createElement ('option')
        
  //       langOpt.textContent=`${filteredLang}` 
      
  //       selec.appendChild(langOpt);
      
  //     } 
  //   }   

  // }

}
  lanGuages ()