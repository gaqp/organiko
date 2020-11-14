package models;

public class UserModel {
    private String nome;
    private String email;
    private String password;

    public UserModel(String nome, String email, String password) {
        this.nome = nome;
        this.email = email;
        this.password = password;
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

    public boolean setPassword(String password) {
        if (!password.equals("")) {
            this.password = password;
            return true;
        }
        return false;
    }

    public String getPassword() {
        return this.password;
    }
}
