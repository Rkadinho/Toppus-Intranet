import React from 'react'
import '../css/date.css'
import { DateTime } from 'luxon'


export default class Date extends React.Component {
    constructor(props) {
        super(props);
        this.state = {second: DateTime.now()};
      }

    componentDidMount() {
        this.second = setInterval(
          () => this.tick(),
          1000
        );
      }

      componentWillUnmount() {
        clearInterval(this.second);
      }
    
      tick() {
        this.setState({
          date: new Date()
        })
      }

    render() {
        var formatDays = {
          weekday: 'long', 
          day: 'numeric',
          month: 'long',
          year: 'numeric' 
        };

        var formatHour = {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        };

        /*var formatCalendar = {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric'
        }*/

        const date = DateTime.now().toLocaleString(formatDays);
        const hour = DateTime.now().toLocaleString(formatHour);
        //const month = DateTime.now().toLocaleString(formatCalendar)
        let text;
        //let textparty;
        
        if(hour >= '00:00'){
          text = 'Bom Dia!'
        }
        if(hour >= '12:00') {
          text = 'Boa Tarde!'
        }
        if(hour >= '18:00'){
          text = 'Boa noite!'
        }

        /*if(month == '11/09/2021'){
          textparty = 'olha lá, funcionou!'
        }else{
          textparty = 'sera que vai mudar o texto amanhã?'
        }*/

        return(
            <div>
                <h4 className='date'>{text} <br/> Hoje é {date} <br /> {hour} {/*{textparty}*/}</h4>
            </div> 
        )
    }
}
