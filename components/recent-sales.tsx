import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sarah Davis</p>
          <p className="text-sm text-muted-foreground">sarah.davis@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$1,999.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=64&h=64&fit=crop&crop=faces" />
          <AvatarFallback>JM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">James Miller</p>
          <p className="text-sm text-muted-foreground">james.miller@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$39.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces" />
          <AvatarFallback>EM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Emma Wilson</p>
          <p className="text-sm text-muted-foreground">emma.wilson@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$299.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces" />
          <AvatarFallback>DC</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">David Chen</p>
          <p className="text-sm text-muted-foreground">david.chen@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$99.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=64&h=64&fit=crop&crop=faces" />
          <AvatarFallback>AK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Alex Kim</p>
          <p className="text-sm text-muted-foreground">alex.kim@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$849.00</div>
      </div>
    </div>
  );
}