get('/step1', a => {
    get(`/step2/${a}`, b =>{
        get(`/step3/${b}`, c =>{
            get(`/step3/${c}`, d =>{
                console.log(d);
            })
        })
    })
})


// 전형적인 콜백 헬이 발생하는 사례