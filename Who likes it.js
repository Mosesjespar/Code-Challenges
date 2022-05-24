function likes(names) {
    // TODO
    let x = names.length;
    if (x < 1) {
        return 'no one likes this'

    }
    else if(x===1){
        return names[0] +' likes this'

    }
    else if(x===2){return names[0] +' and '+names[1] +' like this'}
    else if(x===3){return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'}
    
    else if(x>=4){

        return names[0] + ', '+names[1]+' and ' +(x-2) +' others like this'

    }

    
}

