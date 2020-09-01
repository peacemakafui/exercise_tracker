import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Exercise = (props) =>{
    return(
        <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0,10)}</td>
        <td>
            <Link to={'/edit/'+props.exercise._id} className='btn btn-sm btn-success'>edit</Link> |  <button className='btn btn-sm btn-primary' onClick={()=> {props.deleteExercise(props.exercise._id)}}>Delete</button>
            
        </td>
    </tr>

    )   
}

export default class ExerciseList extends Component{
    state = {
        exercises:[]
    };

    componentDidMount(){
        axios.get('http://localhost:3001/exercises/')
          .then(response => {
              this.setState({exercises: response.data})
          })
          .catch((error) =>{
              console.log(error);
          })
    }

    deleteExercise = (id) =>{
        axios.delete('http://localhost:3001/exercises/'+id)
           .then(res => console.log(res.data));

        this.setState({
            exercises: this.state.exercises.filter(exlist => exlist._id !== id)
        })
    }

    exerciseList =() =>{
        return this.state.exercises.map(currentexercises=> {
            return <Exercise exercise={currentexercises} deleteExercise={this.deleteExercise} key={currentexercises._id} />;
        })
    }
    render(){
        return(
            <div>
               <h3>Logged Exercises</h3>
               <table className='table'>
                   <thead className='head-light'>
                       <tr>
                           <th>Username</th>
                           <th>Description</th>
                           <th>Duration</th>
                           <th>Date</th>
                           <th>Actions</th>
                       </tr>
                   </thead>
                   <tbody>
                       {this.exerciseList()}
                   </tbody>
               </table>
            </div>
        );
    }
}