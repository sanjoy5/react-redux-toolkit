import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";


const AddTaskModal = ({ isOpen, setIsOpen }) => {

    const dispatch = useDispatch()
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (data) => {
        // console.log(data);
        dispatch(addTask(data))
        onCancel()
    }


    const onCancel = () => {
        reset()
        setIsOpen(false)
    }

    return (
        <>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'Add a Task'}>
                <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex flex-col mb-5">
                        <label className="mb-2" htmlFor="title">Title</label>
                        <input type="text" id="title" className="w-full rounded-md" {...register("title")} />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label className="mb-2" htmlFor="description">Description</label>
                        <textarea type="text" id="description" className="w-full rounded-md" {...register("description")} />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label className="mb-2" htmlFor="date">Deadline</label>
                        <input type="date" id="title" className="w-full rounded-md" {...register("date")} />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label className="mb-2" htmlFor="assignTo">Assign to</label>
                        <select className="w-full rounded-md" {...register("assignTo")} id="assignTo">
                            <option value="Sanjoy Sarker">Sanjoy Sarker</option>
                            <option value="Samayara Sweety">Samayara Sweety</option>
                            <option value="Razu Sarker">Razu Sarker</option>
                            <option value="Prince Das">Prince Das</option>
                            <option value="Narayan Saha">Narayan Saha</option>
                            <option value="Dipto Sarker">Dipto Sarker</option>
                            <option value="Joy Sarker">Joy Sarker</option>
                        </select>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label className="mb-2" htmlFor="priority">Priority</label>
                        <select id="priority" className="w-full rounded-md" {...register("priority")}>
                            <option defaultValue value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>




                    <div className="flex gap-3 justify-end">
                        <button onClick={() => onCancel()} type="button" className="btn btn-danger">cancel</button>
                        <button type="submit" className="btn btn-primary">Add Task</button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default AddTaskModal;