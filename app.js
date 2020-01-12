((f,a,l,c,o,n)=>{
    var lastDate = [];
    var firstDate = [];
    var weekDay = [];
    var months = [];
// COLOCAR NUMERO MES NO LAST DATE
    for(var i = c;i < 12;i++){
        lastDate.push([new Date(new Date().getFullYear(), (i + 1), 0).toLocaleDateString('pt-BR',{
            day : '2-digit'
        }), new Date(new Date().getFullYear(), (i + 1), 0).toLocaleDateString('pt-BR',{
            month : '2-digit'
        })]);
        firstDate.push(new Date(new Date().getFullYear(), i, 1).toLocaleDateString('en-US',{
            weekday : 'long'
        }));
        months.push([new Date(new Date().getFullYear(), (i + 1), 0).toLocaleDateString('pt-BR',{
            month : '2-digit'
        }), new Date(new Date().getFullYear(), (i + 1), 0).toLocaleDateString('pt-BR',{
            month : 'long'
        })]);
        weekDay.push(weekToInt(firstDate[i]));
    }
    a.onload = ()=>{
        var target = f('#calendar');
        months.forEach((value, index)=>{
            if(index == 0){
                target.append([
                    f(l.createElement('div')).append([
                        f(l.createElement('div')).prop({
                            class : 'row'
                        }).append([
                            f(l.createElement('div')).prop({
                                class : 'col-12'
                            }).append([
                                f(l.createElement('p')).prop({
                                    class : "text-center"
                                }).text(value[1]),
                                f(l.createElement('div')).prop({
                                    class : 'row',
                                    id : 'm'+ value[0]
                                })
                            ])
                        ])
                    ]).prop({
                        class : 'px-3 month active-month',
                        id : value[1]
                    })    
                ])    
            } else {
                target.append([
                    f(l.createElement('div')).prop({
                        id : value[1],
                    }).append([
                        f(l.createElement('div')).prop({
                            class : 'row'
                        }).append([
                            f(l.createElement('div')).prop({
                                class : 'col-12'
                            }).append([
                                f(l.createElement('p')).prop({
                                    class : "text-center"
                                }).text(value[1]),
                                f(l.createElement('div')).prop({
                                    class : 'row',
                                    id : 'm'+ value[0]
                                })
                            ])
                        ])
                    ]).prop({
                        class : 'px-3 month'
                    })    
                ])    
            }
        });
        for(let i = 0;i < 12;i++){
            for(let z = 0;z < weekDay[i];z++){
                f('#m' + lastDate[i][1]).append([
                    f(l.createElement('div')).prop({
                        class : 'border rounded-0 bg-light',
                        style : "width:14.28%;padding: 0 15px;height:90px"
                    })
                ])
            }
            for(let u = 0;u < lastDate[i][0];u++){
                f('#m' + lastDate[i][1]).append([
                    f(l.createElement('div')).prop({
                        class : 'border rounded-0',
                        style : "width:14.28%;padding: 0 15px;height:90px"
                    }).text(u + 1)
                ])
            }
        }
    }
    function weekToInt(day){
        switch(day){
            case 'Sunday':
                return 0;
            case 'Monday':
                return 1;
            case 'Tuesday':
                return 2;
            case 'Wednesday':
                return 3;
            case 'Thursday':
                return 4;
            case 'Friday':
                return 5;
            case 'Saturday':
                return 6;
        }
    }
})($, window, document, 0, 1, 2);