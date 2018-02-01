package com.bpm.model;

import java.io.Serializable;
import java.io.StringReader;
import java.io.StringWriter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


public class OrderBean implements Serializable {

	@Autowired
    Order order;

	@Autowired
    Cart cart;

    String status;

//    @Autowired
//    ServiceDiscovery services;

    
    public void saveOrder() {
    	
    }
    /*
    public void saveOrder() {
    	System.out.println("OrderBean.java : saveOrder()");
        List<CartItem> cartItems = cart.getItems();
        cartItems.stream().map((cartItem) -> {
            OrderItem orderItem = new OrderItem();
            orderItem.itemId = cartItem.getItemId();
            orderItem.itemCount = cartItem.getItemCount();
            return orderItem;
        }).forEach((orderItem) -> {
            order.getOrderItems().add(orderItem);
        });

        try {
            JsonArray orderItems = null;
            for (OrderItem orderItem : order.getOrderItems()) {
                orderItems = Json.createArrayBuilder()
                        .add(Json.createObjectBuilder()
                                .add("itemId", orderItem.getItemId())
                                .add("itemCount", orderItem.getItemCount()))
                        .build();
            }
            JsonObject jsonObject = Json.createObjectBuilder()
                    //                    .add("orderId", order.getOrderId())
                    .add("orderItems", orderItems)
                    .build();
            StringWriter writer = new StringWriter();
            try (JsonWriter w = Json.createWriter(writer)) {
                w.write(jsonObject);
            }

            Response response = services.getOrderService().request().post(Entity.json(writer.toString()));

            Response.StatusType statusInfo = response.getStatusInfo();

            if (statusInfo.getFamily() == Response.Status.Family.SUCCESSFUL) {
                JsonObject jsonResponse = Json.createReader(new StringReader(response.readEntity(String.class))).readObject();
                status = "Order successful, order number: " + jsonResponse.get("orderId");;
            } else {
                status = statusInfo.getReasonPhrase();
            }

            cart.clearCart();
        } catch (Exception e) {
            status = e.getLocalizedMessage();
        }
    }
    */

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
