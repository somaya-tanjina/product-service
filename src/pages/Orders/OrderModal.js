import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const OrderModal = ({ setOrder, order }) => {
    const [user] = useAuthState(auth);
    const handleBooking = () => {};
    return (
        <div>
            {/* <label htmlFor="order-modal" className="btn modal-button">open modal</label> */}

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-center text-lg">
                        Place your desired Order !!
                    </h3>
                    <h4>
                        You are going to order
                        <span className="text-red-600"> {order.name}</span>
                    </h4>
                    <form
                        onSubmit={handleBooking}
                        className="grid grid-cols-1 gap-3 justify-items-center mt-2"
                    >
                        <div class="form-control">
                            <label class="input-group input-group-sm">
                                <span>Name:</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={user ? user.displayName : ""}
                                    class="input input-bordered input-sm"
                                />
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="input-group input-group-sm">
                                <span>Email:</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={user ? user.email : ""}
                                    class="input input-bordered input-sm"
                                />
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="input-group input-group-sm">
                                <span>Price:</span>
                                <input
                                    type="number"
                                    name="order"
                                    value={order.price}
                                    class="input input-bordered input-sm"
                                    readOnly
                                />
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="input-group input-group-sm">
                                <span>Order:</span>
                                <input
                                    type="number"
                                    name="Quantity"
                                    value={order.orderQuantity}
                                    class="input input-bordered w-full input-sm"
                                    readOnly
                                />
                            </label>
                        </div>

                        <div class="form-control">
                            <label class="input-group input-group-sm">
                                <span>Phone:</span>
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder="Phone Number"
                                    class="input input-bordered input-sm"
                                    required
                                />
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="input-group input-group-sm">
                                <span>Address:</span>
                                <textarea
                                    type="text"
                                    name="name"
                                    placeholder="Your addres"
                                    class="input input-bordered input-sm"
                                    required
                                />
                            </label>
                        </div>

                        <input
                            type="submit"
                            value="Submit"
                            className="btn btn-secondary btn-sm w-full max-w-xs"
                        />
                    </form>
                    <div className="modal-action">
                        <label
                            htmlFor="order-modal"
                            className=" bg-[#00A6E8] hover:bg-cyan-600 border-none btn btn-sm"
                        >
                            Cancel
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;
