package models;

public class MessageModel {
    private String nome;
    private String email;
    private String message;

    public MessageModel(String nome, String email, String message) {
        this.nome = nome;
        this.email = email;
        this.message = message;
    }

    public boolean setNome(String nome) {
        if (!nome.equals("")) {
            this.nome = nome;
            return true;
        }
        return false;
    }

    public String getNome() {
        return this.nome;
    }

    public boolean setEmail(String email) {
        if (!email.equals("")) {
            this.email = email;
            return true;
        }
        return false;
    }

    public String getEmail() {
        return this.email;
    }

    public boolean setmessage(String message) {
        if (!message.equals("")) {
            this.message = message;
            return true;
        }
        return false;
    }

    public String getmessage() {
        return this.message;
    }
}
