
import RightCard from './RightCard'


const RightContant = (props) => {
  console.log(props.users);
  
  return (
    <div className=' flex overflow-x-auto flex-nowrap gap-10 rounded-4xl h-full p-6 w-2/3 '>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
      })}
      

        
    </div>
  )
}

export default RightContant