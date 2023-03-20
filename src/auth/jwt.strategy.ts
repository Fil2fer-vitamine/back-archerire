import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Customer } from 'src/customers/entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) {
    super({
      secretOrKey: process.env.JWT_SECRET,
      // Utilisation de la variable d'environnement : protection du mot de passe quand mise sur GITHUB.             'Passe-Secret',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: any): Promise<Customer> {
    console.log('---JWT.STRATEGY au niveau du Payload : validate ---');
    // const idCustomer = payload.customer.id;
    const { id } = payload;
    const user: Customer = await this.customersRepository.findOneBy({
      id,
    });
    console.log('---JWT.STRATEGY - Utilisateur autorisé --> ', user);

    if (!user) throw new UnauthorizedException();
    return user;
  }
}

/**
 * Notes pédagogiques dans le cadre de l'étude :
 * Le fichier jwt.strategy.tsdéfinit une stratégie d'authentification basée sur le JSON WEB TOKEN (JWT --> sorte de carte d'identité d'un utilisateur à un moment donné)
 * La stratégie vérifie si un Utilisateur est authentifié en prenant en compte la validité du Token inclus dans la demande.
 *
 * Un Token est composé de trois éléments :
 * - Un en-tête - HEADER : ici, nous avons l'algorithme de signature 'alg HS256' de type JSON. L'en-tête contient des informations
 *  qui permettent au serveur d'authentification de savoir comment déchiffrer et valider le JWT.
 *
 * - Une partie appelée "PAYLOAD du JWT" - Cette partie, contenant des données en JSON, est encodée en Base64 (Base64 :
 * alphabet de 64 caractères se composant de de lettres majuscules et minuscules, de chiffres et de deux caractères spéciaux.)
 * Le payload comprend, pour notre exemple, le point ENTREE d'identification 'email'.
 * il y a également un identifiant unique : id,
 * un iat étant une date de création du JWT (exprimée en temps UNIX - Nbre de secondes depuis le 01/01/1970).
 * un exp étant une date d'expiration du JWT, exprimée en temps UNIX également.
 *
 * * - Une partie signature : il y a vérification de la signature du destinataire et de la signature incluse dans le token :
 *  s'il y a modification ou altération, le JWT n'est pas considéré 'FIABLE' et l'authentification n'est pas validée.
 *
 *
 * L'identification de l'Utilisateur se fait par l'intermédiaire de son EMAIL car plusieurs personnes peuvent s'appeler par
 * un nom de famille - puis par un prénom (Exemple : Il y a trois M. ANDRE Philippe rien que dans le Groupe Public Ferroviaire).
 *
 * L'information provient de l'exécution du fichier 'auth.module.ts' donnant les instruction pour le temps de
 * validité et la clé secrète qu'il faudra mettre dans le dossier .env .
 * */
