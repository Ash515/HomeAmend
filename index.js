function solution(){
    a=document.getElementById('issues').value;
    if(a=='Cold'){
        cold_sol="Have some ginger and black pepper along with your food.😊";
        document.getElementById('textarea').value=cold_sol;
    }
    else if(a=='Fever'){
        fever_sol="Have some coconut along with your food dont eat chicken and crab.🤩";
        document.getElementById('textarea').value=fever_sol;
    }
    else if(a=='Stomach Pain'){
        stomach_sol="Drink some water and have some cold food.😎";
        document.getElementById('textarea').value=stomach_sol;
    }
    else if(a=='Head Ache'){
        headache_sol="Apply painkiller at your head and drink some tea with ginger.😉";
        document.getElementById('textarea').value=headache_sol;
    }
    else if(a=='Vomit'){
        vomit_sol="Drink some lemon juice.😁";
        document.getElementById('textarea').value=vomit_sol;
    }
     else if(a=='Acidity'){
        acidity_sol="Eat some jaggery, Lemon.Dont eat junk foods. 😚";
        document.getElementById('textarea').value=acidity_sol;
    }
    else if(a=='Tooth Pain'){
        toothpain_sol="Drink some hot water.Wash your mouth with salt. keep ginger piece or salt at the infection part 😁";
        document.getElementById('textarea').value=toothpain_sol;
    }
     else if(a=='hairfall'){
        hairfall_sol="Dont make your head to dry and apply some pure coconut oil or ginglly oil";
        document.getElementById('textarea').value=hairfall_sol;
    }
}
