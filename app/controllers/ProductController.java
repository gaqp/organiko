package controllers;

import play.mvc.*;
import play.libs.Json;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import models.ProductModel;
import java.util.ArrayList;

/**
 * This controller contains an action to handle HTTP requests to the
 * application's home page.
 */
public class ProductController extends Controller {
    private ArrayList<ProductModel> DB = new ArrayList<ProductModel>();

    public ProductController() {
        DB.add(new ProductModel("Pacote básico", "Pacote mais simples, alimenta até 10 pessoas", "https://w1.pngwing.com/pngs/466/143/png-transparent-vegetables-greens-vegetarian-cuisine-fruit-food-fruit-vegetable-smoothie-organic-food-thumbnail.png"));
    }

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
        String title = json.findPath("title").textValue();
        if (title != null && !title.equals("")) {
            String description = json.findPath("description").textValue();
            if (description != null && !description.equals("")) {
                String imgUrl = json.findPath("imgUrl").textValue();
                if (imgUrl != null && !imgUrl.equals("")) {
                    DB.add(new ProductModel(title, description, imgUrl));
                    return ok(json);
                }
            }
        }
        return ok("Erro ao cadastrar produto");
    }

    public Result find(Long id) {
        return ok("Ok " + id);
    }

}