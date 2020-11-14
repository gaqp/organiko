package controllers;

import java.util.ArrayList;
import play.mvc.*;
import play.libs.Json;
import models.UserModel;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

/**
 * This controller contains an action to handle HTTP requests to the
 * application's home page.
 */
public class UserController extends Controller {
    private ArrayList<UserModel> DB = new ArrayList<UserModel>();

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
        String nome = json.findPath("nome").textValue();
        if (nome != null && !nome.equals("")) {
            String email = json.findPath("email").textValue();
            if (email != null && !email.equals("")) {
                String password = json.findPath("password").textValue();
                if (password != null && !password.equals("")) {
                    DB.add(new UserModel(nome, email, password));
                    return ok(json);
                }
            }
        }
        return ok("Conta não criada");
    }

    public Result find(Long id) {
        return ok("Ok " + id);
    }

}