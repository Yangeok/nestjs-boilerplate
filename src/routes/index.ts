// Services
import { UserService } from './user/user.service';
import { ProfileService } from './profile/profile.service';

// Controllers
import { UserController } from './user/user.controller';
import { ProfileController } from './profile/profile.controller';

export { UserService, ProfileService as RoutesServices };
export { UserController, ProfileController as RoutesControllers };