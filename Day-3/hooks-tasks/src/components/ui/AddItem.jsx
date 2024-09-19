import { useState } from "react";
const AddItem = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && description) {
            onAdd({ id: Date.now().toString(), name, description });
            setName("");
            setDescription("");
        }
    };

    return (
        <div className="card shadow-lg p-4 mb-5 bg-light rounded">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 row">
                        <label htmlFor="name" className="form-label col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                placeholder="Enter item name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mb-4 row">
                        <label htmlFor="description" className="form-label col-sm-2 col-form-label">Description</label>
                        <div className="col-sm-10">
                            <textarea
                                id="description"
                                className="form-control"
                                placeholder="Enter item description"
                                rows="4"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="text-end">
                        <button type="submit" className="btn btn-success">Add Item</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;