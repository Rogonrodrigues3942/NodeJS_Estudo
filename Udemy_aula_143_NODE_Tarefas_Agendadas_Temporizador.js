console.log('\n***********\nNODE - Tarefas Agendadas por Temporizador  - 23ª aula \n*****************\n')

const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * 3', function(){
    console.log('Executando taraefa 1!',new Date().getSeconds())
})

setTimeout(function (){
    tarefa1.cancel()
    console.log('Cancelando tarefa 1!!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]

regra.hour = 10
regra. second = 30

const tarefa2 = new schedule.scheduleJob(regra, function(){
    console.log('Exectando tarefa2!!!', new Date().getSeconds())
})