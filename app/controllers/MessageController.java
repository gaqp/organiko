package controllers;

import java.util.ArrayList;
import play.mvc.*;
import play.libs.Json;
import models.MessageModel;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

/**
 * This controller contains an action to handle HTTP requests to the
 * application's home page.
 */
public class MessageController extends Controller {
    private ArrayList<MessageModel> DB = new ArrayList<MessageModel>();

    /**
     * An action that renders an HTML page with a welcome message. The configuration
     * in the <code>routes</code> file means that this method will be called when
     * the application receives a <code>GET</code> request with a path of
     * <code>/</code>.
     */
    public Result index() {

        return ok(Json.toJson(DB));
    }

    @BodyParser.Of(BodyParser.Json.class)
    public Result create(Http.Request request) {
        JsonNode json = request.body().asJson();
        String name = json.findPath("name").textValue();
        if (name != null && !name.equals("")) {
            String email = json.findPath("email").textValue();
            if (email != null && !email.equals("")) {
                String message = json.findPath("message").textValue();
                if (message != null && !message.equals("")) {
                    DB.add(new MessageModel(name, email, message));
                    System.out.println("Nova mensagem recebida de: "+name);
                    return ok(json);
                }
            }
        }
        return badRequest();
    }

    public Result find(Long id) {
        return ok("Ok " + id);
    }

}