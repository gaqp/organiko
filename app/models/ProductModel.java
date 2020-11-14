package models;

public class ProductModel {
    private String title;
    private String description;
    private String imgUrl;

    public ProductModel(String title, String description, String imgUrl) {
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }

    public String getTitle() {
        return this.title;
    }

    public String getDescription() {
        return this.description;
    }

    public String getImgUrl() {
        return this.imgUrl;
    }
}
